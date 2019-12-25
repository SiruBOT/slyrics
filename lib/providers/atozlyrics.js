const fetch = require('node-fetch')
const cheerio = require('cheerio')
const provider = 'atoz'

function getnullObject (provider, err) {
  return {
    title: null,
    artist: null,
    result: null,
    url: null,
    provider: provider,
    error: err ? 'no Lyrics found' : null
  }
}

module.exports.getLyrics = getLyrics
/**
* @param {URL} url - url to get lyrics (AtoZ Song URL)
* @description - get Lyrics from AtoZLyrics
*/
async function getLyrics (songObject) {
  if (!songObject) {
    return getnullObject(provider)
  }
  const result = await fetch(songObject.url)
    .then(res => res.text())
    .catch(console.error)
  const $ = cheerio.load(result)
  const path = 'body > div.container.main-page > div > div.col-xs-12.col-lg-8.text-center > div'
  try {
    return {
      title: songObject.title,
      artist: songObject.artist,
      result: $($(path)[4]).html($($(path)[4]).html().replace(/<br>/g, '\\n')).text().replace(/\\n/g, '\n'),
      url: songObject.url,
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
* @param {String} name - name of search from AtoZLyrics
* @description - get song information from AtoZLyrics
* @returns {Array}
*/
async function search (name) {
  if (!name) return null
  const result = await fetch(`https://search.azlyrics.com/search.php?q=${name}`)
    .then(res => res.text())
    .catch(console.error)
  const array = []
  const $ = cheerio.load(result)
  for (const item of $('body > div.container.main-page > div > div > div > table > tbody > tr').children('.visitedlyr').toArray()) {
    array.push({
      title: $(item).children('a').text(),
      artist: $(item).children('b').text(),
      url: $(item).children('a').attr('href')
    })
  }
  return array
}
