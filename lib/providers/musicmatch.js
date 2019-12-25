const fetch = require('node-fetch')
const cheerio = require('cheerio')
const { getnullObject } = require('./index')
const provider = 'musicmatch'

module.exports.getLyrics = getLyrics
/**
* @param {URL} url - url to get lyrics (MusicMatch Song URL)
* @description - get Lyrics from MusicMatch
*/
async function getLyrics (songObject) {
  if (!songObject) {
    return getnullObject(provider)
  }
  const result = await fetch(songObject.url)
    .then(res => res.text())
    .catch(console.error)
  const $ = cheerio.load(result)
  try {
    return {
      title: songObject.title,
      artist: songObject.artist,
      result: Array.concat($('div.mxm-lyrics').children('span').toArray().map(function(item) {item.text()})),
      provider: provider,
      error: null
    }
  } catch {
    return getnullObject(provider, true)
  }
}

module.exports.get = get
/**
* @param {String} name - song name to get from melon
* @description - get lyrics by name via melon
*/
async function get (name) {
  const result = await search(name)
  const lyrics = await getLyrics(result[0] ? result[0] : undefined)
  return lyrics
}

module.exports.search = search
/**
* @param {String} name - name of search from MusicMatch
* @description - get song information from MusicMatch
* @returns {Array}
*/
async function search (name) {
  if (!name) return null
  const result = await fetch(`https://www.musixmatch.com/search/${item}`)
    .then(res => res.text())
    .catch(console.error)
  const array = []
  const $ = cheerio.load(result)
  for (const item of $('div').children('.track-card').toArray()) {
    if (TitleSoup.attrs('href').includes('/lyrics/')) {
        array.push({
          title: $(item).children('a.title').text(),
          artist: $(item).children('a.artist').text(),
          url: 'https://www.musixmatch.com' + $(item).children('a.title').attr('href')
        })
    }
  }
  return array
}
