const { NotImplementedError } = require('../errors/')
class Provider {
  /**
   * @description Lyrics Search Provider
   * @param {String} name Lyrics Provider Name
   */
  constructor (name) {
    if (!name) throw new NotImplementedError('Provider#name must be implemented')
  }

  /**
   * @description Search Lyrics
   */
  async search () {
    throw new NotImplementedError('Provider#search must be implemented')
  }

  /**
   * @description Get Lyrics (1st item)
   */
  async get () {
    throw new NotImplementedError('Provider#search must be implemented')
  }
}

module.exports = Provider
