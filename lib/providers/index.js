module.exports.melon = require('./melon')
module.exports.atozLyrics = require('./atozlyrics')
module.exports.getnullObject = getnullObject
function getnullObject (provider, err) {
  return {
    title: null,
    artist: null,
    result: null,
    provider: provider,
    error: err ? 'no Lyrics found' : null
  }
}
