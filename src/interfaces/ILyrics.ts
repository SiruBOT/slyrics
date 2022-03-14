import type { IProvider } from "./IProvider";
export interface ILyrics {
  provider: IProvider;
  lyrics: string;
  albumCover?: string | Buffer;
  title: string;
}
