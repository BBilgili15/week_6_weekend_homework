const UpperCaser = function (words) {
  this.words = words
}

UpperCaser.prototype.toUpperCase = function () {
  const newWords = this.words.map((word) => {
    return word.toUpperCase()
  })

  return newWords
}

module.exports = UpperCaser;
