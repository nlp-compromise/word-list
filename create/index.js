const corpus = require('nlp-corpus')
const efrt = require('efrt')
const fs = require('fs')

// let wordList = ['fun', 'cool', 'cooldude', 'funny', 'wicket']
// console.log(efrt.pack(wordList))

let large = corpus.all().toLowerCase()
large = large.replace(/\n/g, ' ')
let allWords = large.split(' ')

//unique them
let counts = {}
for (let i = 0; i < allWords.length; i++) {
  counts[allWords[i]] = counts[allWords[i]] || 0
  counts[allWords[i]] += 1
}
let uniqWords = Object.keys(counts)
allWords = []

//apply basic filters
uniqWords = uniqWords.filter(w => {
  if (!w) {
    return false
  }
  if (counts[w] <= 1) {
    return false
  }
  //cannot have numbers
  if (/[0-9]/.test(w)) {
    return false
  }
  //cannot have punctuation
  if (/[;,.?!:()\[\]'"`“”‘~\{\}…]/.test(w)) {
    return false
  }
  //must have some ascii letters
  if (/[a-z]/.test(w)) {
    return true
  }
  //remove all punctuation
  if (/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/.test(w)) {
    return false
  }
  return true
})
uniqWords = uniqWords.map(w => {
  w = w.replace(/'s$/g, '')
  // w = w.replace(/\s/g, '')
  // w = w.replace(/-/g, ' ')
  // w = w.replace(/[;,.?!:()\[\]'"`“”‘~\{\}…]/g, '')
  w = w.trim()
  return w
})

//unique it again...
let obj = {}
for (let i = 0; i < uniqWords.length; i++) {
  obj[uniqWords[i]] = obj[uniqWords[i]] || 0
  obj[uniqWords[i]] += 1
}
uniqWords = Object.keys(obj)
console.log(uniqWords.length + ' words')

// console.log(uniqWords.join(' '))

// let wordList = ['fun', 'cool', 'cooldude', 'funny', 'wicket']
let packd = efrt.pack(uniqWords)
// console.log(efrt.unpack(packd))
// console.log(packd)
fs.writeFileSync('./_build.js', 'module.exports=`' + packd + '`')
