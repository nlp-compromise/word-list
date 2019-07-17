<div align="center">
  <img src="https://cloud.githubusercontent.com/assets/399657/23590290/ede73772-01aa-11e7-8915-181ef21027bc.png" />
  <div>basially a list of all english words</div>
  <a href="https://npmjs.org/package/huge-word-list">
    <img src="https://img.shields.io/npm/v/huge-word-list.svg?style=flat-square" />
  </a>
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-green.svg?style=flat-square" />
  </a>
      <a href="https://unpkg.com/huge-word-list">
      <img src="https://badge-size.herokuapp.com/spencermountain/huge-word-list/master/builds/huge-word-list.js" />
    </a>
</div>

<div align="center">
  <code>npm install huge-word-list</code>
</div>

using the [efrt](https://github.com/nlp-compromise/efrt/) word compression library, this library packs more words into a very small space.

Most human vocabulary size estimates range from ~30k words.

This library is able to compress that into `~45k`, which means it can be easily used on the client-side.

the wordlist is generated by using the highly-varied texts in [nlp-corpus](https://github.com/nlp-compromise/nlp-corpus)


**some editorial decisions:**
* case insensitive
* no quotations or punctuation or numbers
* accepts unicode letters but not only-unicode words
* must be used at least twice

## See also:
* [word-list](https://github.com/sindresorhus/word-list) by sindresorhus
* [nlp-compromise](https://github.com/spencermountain/nlp-compromise)


MIT