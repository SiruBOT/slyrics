import { SLyricsNotImplementedError } from './errors'
import { IProvider } from './interfaces'
export class Provider implements IProvider {
    public name: string
    public baseUrls: object
    constructor (name: string, baseUrls: object) {
        if (name.length < 0) throw new SLyricsNotImplementedError()
    }

    templateURL () {
        throw 
    }

    search () {

    }
}