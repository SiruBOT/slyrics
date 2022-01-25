import type { IProvider } from ".";
export interface ILyrics {
  provider: IProvider;
  lyrics: string;
  albumCover?: string | Buffer;
  title: string;
}
