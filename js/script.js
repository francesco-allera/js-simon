// FUNZIONE PER L'ARRAY DI NUMERI CASUALI DIVERSI
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

// VARIABILI
var numeriDelGioco = 5;
var secondiDaAspettare = 5;
var arrayDiNumeriDaRicordare = [];
var numeriUtente = [];
var numeriRicordati = [];

// EFFETTIVO LANCIO DEL GIOCO
arrayOfUniqueRandomNumbers(arrayDiNumeriDaRicordare, numeriDelGioco, 1, 100);

alert('I numeri che devi ricordare sono ' + arrayDiNumeriDaRicordare + '\nHai 30 secondi per ricordarli!');

setTimeout(function() {
  for (var i = 0; i < numeriDelGioco; i++) {
    var numeroInserito = (parseInt(prompt('Scrivi un numero che ti ricordi')));
    numeriUtente.push(numeroInserito);
    if (arrayDiNumeriDaRicordare.includes(numeroInserito)) {
      numeriRicordati.push(numeroInserito);
    }
  }
  console.log(numeriUtente);
  console.log(numeriRicordati);
  alert('Hai ricordato ' + numeriRicordati.length + ' numeri\nCioè: ' + numeriRicordati)
}, secondiDaAspettare * 1000);

console.log(arrayDiNumeriDaRicordare);
