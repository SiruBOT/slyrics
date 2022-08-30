<h1 align="center">🗒️  slyrics - Fetch Lyrics Without Api Key</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/slyrics">
    <img alt="slyrics version" src="https://badge.fury.io/js/slyrics.svg"></img>
  </a>
<p>


## 📥  Installation
``
npm install slyrics --save
``   
or   
``yarn add slyrics``

## [Documentation](https://slyrics.cocochino.cafe)
[![pages-build-deployment](https://github.com/SiruBOT/slyrics/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/SiruBOT/slyrics/actions/workflows/pages/pages-build-deployment)

## Example Code
```ts
import { ILyricsSearchResult } from "./interfaces";
import { Lyrics } from "./structures";
import { MelonProvider } from "./providers/MelonProvider";

async function example() {
  const provider = new MelonProvider();
  const res: ILyricsSearchResult = await provider.search("RE:WIND");
  if (res.entries.length === 0) {
    console.log("No result");
    return;
  }
  const lyricsInstance: Lyrics = await res.entries[0].getLyrics();
  console.log(res.entires.length + " results");
  console.log("First entry: " + lyricsInstance.title + " - " + lyricsInstance.artist);
  console.log(lyricsInstance.lyrics);
}

example();
```

|Provider|tag|Contributor|
|------|---|---|
|Melon|melon|[Sannoob3144](https://github.com/sannoob3144)|
