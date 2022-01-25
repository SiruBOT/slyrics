import type { ILyrics } from "../interfaces";
import type { BaseProvider } from ".";
export class Lyrics implements ILyrics {
  public provider: BaseProvider;
  public lyrics: string;
  public title: string;
  public artist: string;
  public albumCover?: string | Buffer;
  constructor(
    provider: BaseProvider,
    title: string,
    artist: string,
    lyrics: string,
    albumCover?: string | Buffer
  ) {
    this.provider = provider;
    this.title = title;
    this.artist = artist;
    this.lyrics = lyrics;
    this.albumCover = albumCover;
  }
}
