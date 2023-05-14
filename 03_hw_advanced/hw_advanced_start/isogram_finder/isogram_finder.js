const IsogramFinder = function (word) {
  this.word = word
}

IsogramFinder.prototype.isIsogram = function () {
  const wordAsArray = []

  for (const letter of this.word) {
    wordAsArray.push(letter.toLowerCase())
  }

  const uniqueLetters = wordAsArray.filter((letter, index) => {
    return wordAsArray.indexOf(letter) === index
  })

  if (uniqueLetters.length === wordAsArray.length) {
    return true 
  } else {
    return false
  }


}

module.exports = IsogramFinder;
