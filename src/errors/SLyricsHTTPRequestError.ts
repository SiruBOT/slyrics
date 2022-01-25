import SLyricsError from "./SLyricsError";
import { STATUS_CODES } from "http";

export default class SLyricsHTTPRequestError extends SLyricsError {
  public statusCode: number;
  public requestURL: string;
  public method: string;
  constructor(statusCode: number, requestURL: string, method: string) {
    super(
      `Error on request ${requestURL} using method ${
        method ?? "Unknown method"
      } ${statusCode} ${STATUS_CODES[statusCode]}`
    );
    this.statusCode = statusCode;
    this.requestURL = requestURL;
    this.method = method;
  }
}
