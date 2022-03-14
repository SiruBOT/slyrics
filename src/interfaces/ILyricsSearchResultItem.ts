import type { Lyrics } from "../structures";
export interface ILyricsSearchResultItem {
  title: string;
  artist: string;
  getLyrics: () => Promise<Lyrics>;
}
