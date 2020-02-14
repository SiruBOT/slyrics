const fetch = require('node-fetch')
const cheerio = require('cheerio')
const provider = 'melon'

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
* @param {Object} songObject - search result
* @param {Number} songObject.sondId - sondId of search result
* @description - get lyrics from melonSongId
*/
async function getLyrics (songObject) {
  if (!songObject) {
    return getnullObject(provider)
  }
  const result = await fetch(`https://www.melon.com/song/detail.htm?songId=${songObject.songId}`)
    .then(res => res.text())
    .catch(console.error)
  const $ = cheerio.load(result)
  try {
    return {
      title: songObject.title,
      artist: songObject.artist,
      albumArt: $('#downloadfrm > div > div > div.thumb > a > img').attr().src,
      result: $('#d_video_summary').html($('#d_video_summary').html().replace(/<br>/g, '\\n')).text().replace(/\\n/g, '\n').trim(),
      url: `https://www.melon.com/song/detail.htm?songId=${songObject.songId}`,
      provider: 'melon',
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
  const searchResult = await search(name)
  const lyrics = await getLyrics(searchResult)
  return lyrics
}

module.exports.search = search
/**
* @param {String} name - song name to get from melon
* @description - get melon track info from melon
*/
async function search (name) {
  const result = await fetch(`https://www.melon.com/search/song/index.htm?q=${encodeURI(name)}`)
    .then(res => res.text())
    .catch(console.error)
  const $ = cheerio.load(result)
  const item = $($($('#frm_defaultList > div > table > tbody > tr').children('.t_left')[0]).children('.pd_none')[0]).children('div')
  const artist = $($($('#frm_defaultList > div > table > tbody > tr').children('.t_left')[1]).children('.wrap')[0]).children('#artistName').children('a.fc_mgray').text()
  return {
    songId: item.children('a.fc_gray').attr('href') ? parseInt(item.children('a.fc_gray').attr('href').split(';')[1].split(',').slice(-1)) : undefined,
    title: item.children('a.fc_gray').text(),
    artist: artist
  }
}
