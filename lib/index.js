// TODO: Create NPM Package - SLyrics
class LyricsLoader {
  constructor () {
    this.providers = require('./providers')
  }

  /**
  * @description - Get Lyrics from each platform
  * @param type - vocaro, melon, AtoZLyrics
  * @param keyword - to get Lyrics
  */
  async get (type, keyword) {
    let value
    switch (type) {
      case 'vocaro':
        break
      case 'melon':
        value = await this.providers.melon.get(keyword)
        break
      case 'atoz':
        value = await this.providers.atozLyrics.get(keyword)
        break
    }
    return value
  }
}

module.exports = LyricsLoader
