import { ILyricsSearchResult } from "./interfaces/ILyricsSearchResult";
import { Lyrics } from "./structures";
import { MelonProvider } from "./providers/MelonProvider";

async function example() {
  const provider = new MelonProvider();
  const res: ILyricsSearchResult = await provider.search("RE:WIND");
  if (res.entries.length === 0) {
    console.log("No result");
  } else {
    const lyricsInstance: Lyrics = await res.entries[0].getLyrics();
    console.log(
      `${res.entries.length} results found. First one: ${lyricsInstance.title} - ${lyricsInstance.artist}
${lyricsInstance.lyrics}`
    );
  }
}

example();
