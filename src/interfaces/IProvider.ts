import type { ILyricsSearchResult } from ".";

export interface IProvider {
  name: string;
  search(query: string): Promise<ILyricsSearchResult>;
}
