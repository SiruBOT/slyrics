import type { ILyrics } from "../interfaces/ILyrics";
import type { BaseProvider } from ".";
export class Lyrics implements ILyrics {
  public provider: BaseProvider;
  public lyrics: string | null;
  public title: string;
  public artist: string;
  public url: string;
  public albumCover?: string | Buffer;
  constructor(
    provider: BaseProvider,
    title: string,
    artist: string,
    lyrics: string | null,
    url: string,
    albumCover?: string | Buffer
  ) {
    this.provider = provider;
    this.title = title;
    this.artist = artist;
    this.lyrics = lyrics;
    this.url = url;
    this.albumCover = albumCover;
  }
}
