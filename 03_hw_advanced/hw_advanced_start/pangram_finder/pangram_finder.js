const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase
}

PangramFinder.prototype.isPangram = function () {

  const phraseAsArray = []

  for (const letter of this.phrase) {
    phraseAsArray.push(letter.toLowerCase())
  }

  const arrayOfLetters =  phraseAsArray.filter((letter) => {
    if (this.alphabet.includes(letter.toLowerCase())) {
      return letter.toLowerCase()
    }
  })
  
  const uniqueLetters = arrayOfLetters.filter((letter, index) => {
    return arrayOfLetters.indexOf(letter) === index
  })


  if (uniqueLetters.length === 26) {
    return true 
  } else {
    return false
  }
}




module.exports = PangramFinder;
