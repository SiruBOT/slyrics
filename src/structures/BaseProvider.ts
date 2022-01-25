import { SLyricsNotImplementedError } from "../errors";
import { IProvider, ILyricsSearchResult } from "../interfaces";
import { NotImplCodes } from "../Constances";
export abstract class BaseProvider implements IProvider {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async search(query: string): Promise<ILyricsSearchResult> {
    throw new SLyricsNotImplementedError(NotImplCodes.PROVIDER_SEARCH_NOTIMPL);
  }

  formatURL(templateStr: string, ...toReplace: string[]): string {
    return templateStr.replace(/{(\d+)}/g, (match, number) => {
      return encodeURI(toReplace[number]) || match;
    });
  }
}
