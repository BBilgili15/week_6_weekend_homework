const AnagramFinder = function (word) {
  this.word = word
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  // const initialWordLetters = []

  // for (const letter of this.word) {
  //   initialWordLetters.push(letter)
  // }

  // const confirmedAnagrams = []

  // for (const word in otherWords) {
  //   let lettersInWord = []
  //   for (const letter in word) {
  //     lettersInWord.push(letter)
  //   }

  //   const matchingLetters = []    

  //   for (const wordLetter of lettersInWord) {
  //     for (const letter of initialWordLetters) {
  //       if (letter === wordLetter) {
  //         matchingLetters.push(letter)
  //       }
  //     }
  //   }

  //   if (matchingLetters.length === word.length) {
  //     confirmedAnagrams.push(word)
  //   }

  // }

  // return matchingLetters

}





// musings
// needs to pull every letter from the inital word
// needs to pull every letter from the list of words
// needs to check every letter of initial word against each letter of each other word
// for letter of initial word
// for letter of X word
// if letter == letter: add to new array
// if array.length === initial word.length: other array.push X word
// return array of new words

module.exports = AnagramFinder;
