# Cabul

[![](https://img.shields.io/npm/v/cabul)](https://www.npmjs.com/package/cabul)
[![](https://img.shields.io/badge/dynamic/json.svg?style=plastic&logo=appveyor&label=endpoint%20count&url=http://192.145.238.5/~pasirm5/v3/cabul/data.json&query=%24.tags_count&colorB=#4c1)](http://192.145.238.5/~pasirm5/v3/cabul/data.json)
[![CodeFactor](https://www.codefactor.io/repository/github/sinkaroid/cabul/badge)](https://www.codefactor.io/repository/github/sinkaroid/cabul)  

## All the power of Cabul

Cabul has a tons feature rich for interacting with the dedicated subreddits.  
This wrapper exists as a directory of all hentai-related subreddits. Say goodbye to your manually HTTP request.

## Getting started

```sh
# npm
npm i cabul

# yarn
yarn add cabul
```

> Python? check [cabul.py](https://pypi.org/project/cabul),
> other Implementation check our base url and do `GET` as usual.

## Basic

```js
const crot = require('cabul');
const client = new crot.Client();

client.hentai().then((data) => {
    // return with data
    // or push with yours
    // console.log(data); for your best Friend
});
```

## Return

```json
{
    "url": "https://i.imgur.com/1i5LKSq.png",
    "r": "Atago",
    "rdesc": "A subreddit dedicated to the character Atago from Azur Lane"
}
```

## Advanced async

> If don't mind for selecting endpoints, simply just mix them, eg:

```js
const crot = require('cabul');
const client = new crot.Client();

async function reddit() {
    const rTags = [
        client.hentai(),
        client.ecchi(),
        client.milf(),
        client.atago(),
        client.netorare(),
        client.nekomimi()
    ];
    const random = rTags[Math.floor(Math.random() * rTags.length)];
    let randomCrot = await random;
    console.log(randomCrot);
}

reddit();
```

## Docs

> [Documentation](https://cabul.sinkaroid.io 'Documentaion'), I suggest you to make your own handler for each functions, probably some items are throwing an error because, emmm idk sometime relatedsub (sub-reddits) has been permanently or temporarily Banned, so just do it.

| Function         | subReddit                                                              | description                                                                                                              |
| ---------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| hentai           | [/r/Hentai](https://www.reddit.com/r/Hentai)                           | For all Japanese-style 18+ art                                                                                           |
| ecchi            | [/r/Ecchi](https://www.reddit.com/r/Ecchi)                             | For lewd artwork without a male presence.                                                                                |
| netorare         | [/r/netorare](https://www.reddit.com/r/netorare)                       | A subreddit dedicated to netorare, or cuckold                                                                            |
| kemonomimi       | [/r/kemonomimi](https://www.reddit.com/r/kemonomimi)                   | Animal girls                                                                                                             |
| yuri             | [/r/Yuri](https://www.reddit.com/r/Yuri)                               | Girl-on-girl action                                                                                                      |
| thicc            | [/r/Thighdeology](https://www.reddit.com/r/Thighdeology)               | A subreddit dedicated to thicc thighs                                                                                    |
| ahegao           | [/r/Ahegao](https://www.reddit.com/r/Ahegao)                           | Hentai where the woman is "fucked silly"                                                                                 |
| monster          | [/r/Monstergirl](https://www.reddit.com/r/Monstergirl)                 | Where the woman has more than just animal ears/tail                                                                      |
| bondage          | [/r/Hentaibondage](https://www.reddit.com/r/Hentaibondage)             | Hentai focused on bondage                                                                                                |
| trap             | [/r/traphentai](https://www.reddit.com/r/traphentai)                   | Traps and traps being fucked.                                                                                            |
| pantsu           | [/r/Pantsu](https://www.reddit.com/r/Pantsu)                           | A subreddit dedicated to fanservice moments and artworks of anime/manga/visual novels                                    |
| milf             | [/r/AnimeMILFS](https://www.reddit.com/r/AnimeMILFS)                   | Anime mothers you want to fuck                                                                                           |
| zettairyouiki    | [/r/ZettaiRyouiki](https://www.reddit.com/r/ZettaiRyouiki)             | The strip of visible skin between a skirt and high socks                                                                 |
| nekomimi         | [/r/Nekomimi/](https://www.reddit.com/r/Nekomimi/)                     | Cat girls                                                                                                                |
| paizuri          | [/r/Paizuri](https://www.reddit.com/r/Paizuri)                         | Hentai titjobs                                                                                                           |
| booty            | [/r/Animebooty](https://www.reddit.com/r/Animebooty)                   | An ass subreddit. That's all.                                                                                            |
| waifusgonewild   | [/r/Waifusgonewild](https://www.reddit.com/r/Waifusgonewild)           | Anime girls taking lewd selfies                                                                                          |
| gameovergirls    | [/r/GameOverGirls](https://www.reddit.com/r/GameOverGirls)             | Girls being dominated as if in a "Game Over" sequence.                                                                   |
| sukebei          | [/r/Sukebei](https://www.reddit.com/r/Sukebei)                         | Naked anime girls                                                                                                        |
| cum              | [/r/CumHentai](https://www.reddit.com/r/CumHentai)                     | Cum. Lots of it.                                                                                                         |
| corruptionhentai | [/r/Corruptionhentai](https://www.reddit.com/r/Corruptionhentai)       | Hentai Subreddit focused on the corruption of the innocent. Debauch the pure heroines and the like.                      |
| chiisai          | [/r/Chiisaihentai](https://www.reddit.com/r/Chiisaihentai)             | A subreddit dedicated to tiny boobs                                                                                      |
| muchi            | [/r/Muchihentai](https://www.reddit.com/r/Muchihentai)                 | Anime girls with a bit of extra meat on them                                                                             |
| tentai           | [/r/Tentai/](https://www.reddit.com/r/Tentai/)                         | Where the woman is fucked by tentacles                                                                                   |
| dekai            | [/r/Dekaihentai](https://www.reddit.com/r/Tentai/)                     | A subreddit dedicated to huge boobs                                                                                      |
| yaoi             | [/r/Yaoi](https://www.reddit.com/r/Yaoi)                               | Guy-on-guy action                                                                                                        |
| oral             | [/r/OralHentai](https://www.reddit.com/r/Animemidriff)                 | A subreddit dedicated to all things oral                                                                                 |
| armpits          | [/r/AnimeArmpits](https://www.reddit.com/r/AnimeArmpits)               | Armpits of cute anime girls                                                                                              |
| bodysuits        | [/r/Animebodysuits](https://www.reddit.com/r/Animebodysuits)           | Form fitting clothing that shows it all                                                                                  |
| rippedlegwear    | [/r/rippedanimelegwear ](https://www.reddit.com/r/rippedanimelegwear)  | Dedicated to ripped anime legwear                                                                                        |
| atago            | [/r/Atago](https://www.reddit.com/r/Atago)                             | A subreddit dedicated to the character Atago from Azur Lane                                                              |
| handbras         | [/r/Animehandbras](https://www.reddit.com/r/Animehandbras)             | Where the women substitute a bra with their hands and arms                                                               |
| elf              | [/r/ElfHentai](https://www.reddit.com/r/ElfHentai)                     | Dedicated to hentai with Elves (CURRENTLY BANNED)                                                                        |
| ecchibondage     | [/r/EcchiBondage](https://www.reddit.com/r/EcchiBondage)               | Like hentai bondage, just less lewd                                                                                      |
| cleavage         | [/r/HentaiCleavage](https://www.reddit.com/r/HentaiCleavage)           | Juicy cleavage                                                                                                           |
| maid             | [/r/MaidHentai](https://www.reddit.com/r/MaidHentai)                   | Hentai with maids                                                                                                        |
| usagi            | [/r/Usagimimi](https://www.reddit.com/r/Usagimimi)                     | Bunny girls                                                                                                              |
| lactation        | [/r/Hentailactation](https://www.reddit.com/r/Hentailactation)         | A subreddit dedicated to art depicting erotic lactation.                                                                 |
| feet             | [/r/AshiHentai](https://www.reddit.com/r/AshiHentai)                   | A subreddit dedicated to juicy anime feet                                                                                |
| lewd             | [/r/LewdAnimeGirls](https://www.reddit.com/r/LewdAnimeGirls)           | A smaller version of r/Ecchi                                                                                             |
| taihou           | [/r/Taihou](https://www.reddit.com/r/Taihou)                           | A subreddit dedicated the the characte Taihou from Azur Lane                                                             |
| christmascake    | [/r/ChristmasCake](https://www.reddit.com/r/ChristmasCake)             | Where the woman is unmarried and over the age of 25, thus, "unsold" before the 25th of december. hence, a Christmas cake |
| rikka            | [/r/ChurchOfRikka](https://www.reddit.com/r/ChurchOfRikka)             | A subreddit dedicated to the character Rikka Takarada from SSSS.Gridman.                                                 |
| hearts           | [/r/HentaiHearts](https://www.reddit.com/r/HentaiHearts)               | A hentai subreddits with hearts as a focus, particularly in the eyes                                                     |
| bisex            | [/r/BisexualHentai](https://www.reddit.com/r/BisexualHentai)           | A hentai subreddit with a bisexual focus                                                                                 |
| smothering       | [/r/HentaiSmothering](https://www.reddit.com/r/HentaiSmothering)       | Where the woman smothers another person with her body                                                                    |
| vacuum           | [/r/VacuumHentai](https://www.reddit.com/r/VacuumHentai)               | Women vacuum sealed in bags                                                                                              |
| humiliation      | [/r/HentaiHumiliation](https://www.reddit.com/r/HentaiHumiliation)     | Where the woman is degraded and humiliated                                                                               |
| forniphilia      | [/r/HentaiForniphilia](https://www.reddit.com/r/HentaiForniphilia)     | Where the woman is turned into an object                                                                                 |
| officelady       | [/r/OfficeLady](https://www.reddit.com/r/OfficeLady)                   | For business dressed women                                                                                               |
| dtittytouching   | [/r/2DTittyTouching](https://www.reddit.com/r/2DTittyTouching)         | For drawn titties touching other drawn titties.                                                                          |
| inumimi          | [/r/inumimi](https://www.reddit.com/r/inumimi)                         | Doggirls                                                                                                                 |
| cumsluts         | [/r/HentaiCumsluts](https://www.reddit.com/r/HentaiCumsluts)           | Girls who love being covered in cum.                                                                                     |
| heterochromia    | [/r/Heterochromiahentai](https://www.reddit.com/r/Heterochromiahentai) | Girls with different coloured eyes                                                                                       |
| ai               | [/r/MechanicalSluts](https://www.reddit.com/r/MechanicalSluts)         | A porn subreddit for androids, AI, cyborgs etc                                                                           |
| pokeporn         | [/r/PokePorn](https://www.reddit.com/r/PokePorn)                       | Pokemon-themed porn                                                                                                      |
| rule34           | [/r/rule34](https://www.reddit.com/r/rule34)                           | If it exists, there exists porn of it, likely found here                                                                 |
| western          | [/r/WesternHentai](https://www.reddit.com/r/WesternHentai)             | Hentai in a western style                                                                                                |
| lol              | [/r/Rule34LoL](https://www.reddit.com/r/Rule34LoL)                     | League Of Legends-themed porn                                                                                            |
| arknuts          | [/r/Arknuts](https://www.reddit.com/r/Arknuts)                         | Arknights- themed porn                                                                                                   |
| overwatch        | [/r/Overwatch_Porn](https://www.reddit.com/r/Overwatch_Porn)           | Overwatch-themed porn                                                                                                    |
| twob             | [/r/2Booty](https://www.reddit.com/r/2Booty)                           | NieR: Automata-themed porn                                                                                               |
| kanmusunights    | [/r/KanMusuNights](https://www.reddit.com/r/2Booty)                    | Kantai Collection-themed porn                                                                                            |

## Docs

[Documentation](https://cabul.sinkaroid.io 'Documentaion')

## Todo

-   [x] Hentai
-   [ ] Real (porn)

## Legal

This tool can be freely copied, modified, altered, distributed without any attribution whatsoever. However, if you feel like this tool deserves an attribution, mention it. It won't hurt anybody :)

Please, read the [license terms](/LICENSE). Don't worry, it can be read in less than 30 seconds, unless you have some sort of reading disability - in that case, I'm wondering why you're still reading this text. Really. Stop. Please. I mean, seriously. Why are you still reading?

## Notable

Since this tool includes some contributions, and I'm not an asshole, I'll publically thank the following users for their help:

-   [/r/Hentai](https://www.reddit.com/r/hentai/wiki/hentai_subreddits) as "milestone" and for making this wrapper "true"
