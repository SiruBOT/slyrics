const Lyrics = require('../lib/index')
const lyrics = new Lyrics()

async function test () {
  const start = new Date().getTime()
  const result = await lyrics.get('melon', 'Takeaway')
  console.log(result)
  console.log(new Date().getTime() - start + 'ms')
}
test()
