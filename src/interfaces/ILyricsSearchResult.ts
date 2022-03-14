import type { BaseProvider, LyricsSearchResultItem } from "../structures";
export interface ILyricsSearchResult {
  provider: BaseProvider;
  searchTimeMs: number;
  entries: LyricsSearchResultItem[];
}
