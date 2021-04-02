import ILyrics from './ILyrics'
import IProvider from './IProvider'

export default interface ISearchResult {
  provider: IProvider,
  albumImage?: string,
  title: string,
  lyrics: ILyrics
}
