# slyrics - Fetch Lyrics Without Api Key

## Installation
Using npm:
```
npm install slyrics --save
```
Using yarn:
```
yarn add slyrics
```

## Documentation
[Typedoc](https://sirubot.github.io/slyrics/)

## Typescript Example
```ts
import { ILyricsSearchResult } from "./interfaces";
import { Lyrics } from "./structures";
import { MelonProvider } from "./providers/MelonProvider";

async function example() {
  const provider = new MelonProvider();
  const res: ILyricsSearchResult = await provider.search("RE:WIND");
  if (res.entries.length === 0) {
    console.log("No result");
  } else {
    const lyricsInstance: Lyrics = await res.entries[0].getLyrics();
    console.log(
      `${res.entries.length} results found.\nFirst one: ${lyricsInstance.title} - ${lyricsInstance.artist}
${lyricsInstance.lyrics}`
    );
  }
}

example();
```

|Provider|tag|Contributor|
|------|---|---|
|Melon|melon|Sangoon_Is_Noob|
