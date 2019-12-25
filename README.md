# slyrics - Fetch Lyrics Without Api Key

## This project uses Standard JS Style
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

# Contributors:
|[Sangoon_Is_Noob](https://github.com/cotwo0139)|
|------|
|![Sangoon_Profile_SRC](https://cdn.discordapp.com/avatars/260303569591205888/83811d211c198632dc279079436fc614.png?size=128)|

## Examples
```
const Lyrics = require('slyrics')
const lyrics = new Lyrics()

async function test (provider, title) {
    const start = new Date().getTime()
    const result = await lyrics.get(provider, title)
    console.log(result)
    console.log(result.result)
    console.log(new Date().getTime() - start + 'ms')
}
test('melon', 'Takeaway')
```

|Provider|tag|Contributor|
|------|---|---|
|Melon|melon|Sangoon_Is_Noob|
|AtoZLyrics|atoz|Sangoon_Is_Noob|
