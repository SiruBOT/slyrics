import ISearchResult from './ISearchResult'

export default interface IProvider {
  name: string,
  search(query: string): ISearchResult[]
}
