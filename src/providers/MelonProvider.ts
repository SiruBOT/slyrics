import { JSDOM } from "jsdom";
import { ISearchResult } from "../interfaces";
import { BaseProvider } from "../structures";
import { HTTPRequester } from "../structures/HTTPRequester";
interface MelonBaseUrls {
  search: string;
}

export class MelonProvider extends BaseProvider {
  private baseUrls: MelonBaseUrls;
  constructor() {
    super("melon");
    this.baseUrls = {
      search: "https://www.melon.com/search/song/index.htm?q={0}",
    };
  }

  async search(query: string): Promise<ISearchResult> {
    const searchUrl = this.formatURL(this.baseUrls.search, query);
    const htmlResp = await HTTPRequester.getText(searchUrl);
    const { document }: { document: Document } = new JSDOM(htmlResp).window;
    
    return {
      result: [],
    };
  }
}
