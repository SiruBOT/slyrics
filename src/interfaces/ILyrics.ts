import { Provider } from '../Provider'

export default interface ILyrics {
  provider: Provider,
  rawLyrics: string,
  splitPages(length: number): string[]
}
