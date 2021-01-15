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
// FUNZIONE PER LA VALIDAZIONE DEL NUMERO INSERITO DALL'UTENTE
function validatorRealNumber(number, minRange, maxRange) {
  if (isNaN(number)) {
    return false;
  }
  if (number < minRange) {
    return false;
  }
  if (number > maxRange) {
    return false;
  }
  return true;
}

// VARIABILI
var numeriDelGioco = 5;
var secondiDaAspettare = 5;
var numeriMinimi = 1;
var numeriMassimi = 100;
var arrayDiNumeriDaRicordare = [];
var numeriUtente = [];
var numeriRicordati = [];

// EFFETTIVO LANCIO DEL GIOCO
arrayOfUniqueRandomNumbers(arrayDiNumeriDaRicordare, numeriDelGioco, numeriMinimi, numeriMassimi);

alert('I numeri che devi ricordare sono ' + arrayDiNumeriDaRicordare + '\nHai ' + secondiDaAspettare + ' secondi per vedere se riesci a ricordarli!');

var countdown = setInterval(function() {
  secondiDaAspettare--;
  document.getElementById('counter').innerText = 'Mancano ' + secondiDaAspettare + ' secondi';
  if (secondiDaAspettare === 0) {
    clearInterval(countdown);
  }
}, 1000);


setTimeout(function() {
  while (numeriUtente.length < numeriDelGioco) {
    var numeroInserito = parseInt(prompt('Scrivi il ' + (numeriUtente.length + 1) + ' numero che ti ricordi'));
    if (numeriUtente.includes(numeroInserito)) {
      alert('Hai già inserito questo numero');
    } else if (!validatorRealNumber(numeroInserito, numeriMinimi, numeriMassimi)){
      alert('Inserisci solo numeri compresi tra ' + numeriMinimi + ' e ' + numeriMassimi);
    } else {
      numeriUtente.push(numeroInserito);
      if (arrayDiNumeriDaRicordare.includes(numeroInserito)) {
        numeriRicordati.push(numeroInserito);
      }
    }
  }
  console.log(numeriUtente);
  console.log(numeriRicordati);
  alert('Hai ricordato ' + numeriRicordati.length + ' numeri\nCioè: ' + numeriRicordati);
}, secondiDaAspettare * 1000);

console.log(arrayDiNumeriDaRicordare);
