function arrayOfUniqueRandomNumbers(array, arrayLength, minNumberRange, maxNumberRange) {
  while (array.length < arrayLength) {
    var randomNumber = Math.floor(Math.random() * (maxNumberRange + 1 - minNumberRange) + minNumberRange);
    if(!array.includes(randomNumber)) {
      array.push(randomNumber);
    }
  }
  array.sort(function (a, b) {
    return a - b;
  })
}

var arrayDiNumeriDaRicordare = [];

arrayOfUniqueRandomNumbers(arrayDiNumeriDaRicordare, 5, 1, 100);

alert('I numeri che devi ricordare sono ' + arrayDiNumeriDaRicordare + '\nHai 30 secondi per ricordarli!');
