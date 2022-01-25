import SLyricsError from "./SLyricsError";
export default class SLyricsNotImplementedError extends SLyricsError {
  constructor(constant: string, message?: string) {
    super(`${constant}\n${message}`);
  }
}
