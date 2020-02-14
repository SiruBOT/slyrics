# slyrics - Fetch Lyrics Without Api Key

[![NPM Badge](https://nodei.co/npm/slyrics.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/slyrics)
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

# Contributors:
|[Sangoon_Is_Noob](https://github.com/cotwo0139)|
|------|
|![Sangoon_Profile_SRC](https://chinobot.ga/author_profile.png)|

Interested this project? [Contribute this project!](https://github.com/cotwo0139/slyrics/pulls)

## Installations
Using npm:
```
npm install slyrics --save
```
or [Download](https://github.com/cotwo0139/slyrics) this repository!

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
