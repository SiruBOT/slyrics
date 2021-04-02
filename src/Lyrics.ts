import { ILyrics } from './interfaces'
import { Provider } from './Provider'

export default class Lyrics implements ILyrics {
    public provider: Provider
    public rawLyrics: string
    constructor (provider: Provider, rawLyrics: string) {
      this.provider = provider
      this.rawLyrics = rawLyrics
    }

    splitPages (length: number): string[] {
      return [] // TODO
    }
}
