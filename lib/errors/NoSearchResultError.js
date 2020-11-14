const LyricsLoadFailedError = require('./LyricsLoadFailedError')
/**
 * @description No Search Result Error
 * @extends LyricsLoadFailedError
 */
module.exports = class NoSearchResultError extends LyricsLoadFailedError {}
