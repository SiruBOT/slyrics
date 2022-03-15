import type { IProvider } from "./IProvider";
export interface ILyrics {
  provider: IProvider;
  lyrics: string | null;
  albumCover?: string | Buffer;
  title: string;
}
