import { fetch, type Response } from "undici";
import { SLyricsHTTPRequestError } from "../errors/SLyricsHTTPRequestError";
export class HTTPRequester {
  static async get(url: string): Promise<Response> {
    const resp: Response = await fetch(url, { method: "GET" });
    if (!resp.ok) {
      throw new SLyricsHTTPRequestError(resp.status, url, "GET");
    }
    return resp;
  }

  static async getText(url: string): Promise<string> {
    const resp: Response = await this.get(url);
    const text: string = await resp.text();
    return text;
  }
}
