import type { Lyrics } from ".";
import type { ILyricsSearchResultItem } from "../interfaces";

export class LyricsSearchResultItem implements ILyricsSearchResultItem {
  public title: string;
  public artist: string;
  public getLyrics: () => Promise<Lyrics>;
  constructor(title: string, artist: string, getLyrics: () => Promise<Lyrics>) {
    this.title = title;
    this.artist = artist;
    this.getLyrics = getLyrics;
  }
}
