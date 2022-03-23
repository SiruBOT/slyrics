import { JSDOM } from "jsdom";
import { ILyricsSearchResult } from "../interfaces/ILyricsSearchResult";
import { BaseProvider, Lyrics, LyricsSearchResultItem } from "../structures";
import { HTTPRequester } from "../structures/HTTPRequester";

type MelonBaseUrls = {
  [key: string]: string;
  search: string;
  songInfo: string;
};

export class MelonProvider extends BaseProvider {
  private baseUrls: MelonBaseUrls;
  constructor() {
    super("melon");
    this.baseUrls = {
      search: "https://www.melon.com/search/song/index.htm?q={0}",
      songInfo: "https://www.melon.com/song/detail.htm?songId={0}",
    };
  }

  async search(query: string): Promise<ILyricsSearchResult> {
    const startTimeMs = Date.now();
    const searchUrl: string = this.formatURL(this.baseUrls.search, query);
    const htmlResp: string = await HTTPRequester.getText(searchUrl);
    const entries: LyricsSearchResultItem[] = [];
    const { document }: { document: Document } = new JSDOM(htmlResp).window;
    const searchResultTbody: Element | null = document.querySelector(
      "#frm_defaultList > div > table > tbody"
    );
    if (!searchResultTbody?.children)
      return {
        provider: this,
        entries,
        searchTimeMs: Date.now() - startTimeMs,
      };
    for (const element of searchResultTbody?.children) {
      const titleElement: Element | null = element
        .getElementsByClassName("t_left")[0]
        .getElementsByClassName("pd_none")[0]
        .getElementsByClassName("ellipsis")[0]
        .getElementsByClassName("fc_gray")[0];
      const melonId: string = parseInt(
        titleElement
          ?.getAttribute("href")
          ?.match(/(?!\))(?!,)\d*?\);/g)?.[0] as string
      ).toString();
      // if MelonId or titleElement is null, skip
      if (!titleElement || !melonId) continue;
      else {
        const artistElement: Element | null = element
          .getElementsByClassName("wrapArtistName")[0]
          .getElementsByClassName("ellipsis")[0]
          .getElementsByClassName("fc_mgray")[0];
        const title: string = titleElement?.textContent ?? "";
        const artist: string = artistElement?.textContent ?? "";
        entries.push(
          new LyricsSearchResultItem(
            title,
            artist,
            this.getLyricsTemplate(title, artist, melonId)
          )
        );
      }
    }
    return {
      provider: this,
      entries,
      searchTimeMs: Date.now() - startTimeMs,
    };
  }

  getLyricsTemplate(
    title: string,
    artist: string,
    melonId: string
  ): () => Promise<Lyrics> {
    return async (): Promise<Lyrics> => {
      const songInfoURL: string = this.formatURL(
        this.baseUrls.songInfo,
        melonId
      );
      const htmlResp: string = await HTTPRequester.getText(songInfoURL);
      const { document }: { document: Document } = new JSDOM(htmlResp).window;
      const lyrics = document
        .querySelector("#d_video_summary")
        ?.innerHTML.split("\n") // remove html comment (top line)
        .slice(1, -1)
        .join("\n") // join array to string
        .replaceAll("<br>", "\n") // replace <br> to new line
        .trimStart()
        .trimEnd(); // remove whitespace
      const albumCover = document
        .querySelector("#downloadfrm > div > div > div.thumb > a > img")
        ?.getAttribute("src")
        ?.replace(/\/melon\/resize\/\d+\/quality\/\d+\/optimize/g, ""); // remove resize option
      return new Lyrics(
        this,
        title,
        artist,
        lyrics ? lyrics : null,
        songInfoURL,
        albumCover ? albumCover : ""
      );
    };
  }
}
