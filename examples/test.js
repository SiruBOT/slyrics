const Lyrics = require('../lib/index')
const lyrics = new Lyrics()

async function test (provider, title) {
  const start = new Date().getTime()
  const result = await lyrics.get(provider, title)
  console.log(result)
  console.log(result.result)
  console.log(new Date().getTime() - start + 'ms')
}
test('musixmatch', 'Takeaway')
