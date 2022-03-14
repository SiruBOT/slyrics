import type { ILyricsSearchResult } from "./ILyricsSearchResult";

export interface IProvider {
  name: string;
  search(query: string): Promise<ILyricsSearchResult>;
}
