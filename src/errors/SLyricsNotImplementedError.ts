import SLyricsError from './SLyricsError'
import { NotImplCodes } from '../Constances'
export default class SLyricsNotImplementedError extends SLyricsError {
  constructor (constant: string, message?: string) {
    super(`${NotImplCodes[constant]}\n${message}`)
  }
}
