// FUNZIONE PER L'ARRAY DI NUMERI CASUALI DIVERSI ED IN ORDINE CRESCENTE
function arrayOfUniqueRandomNumbersOrdered(array, arrayLength, minNumberRange, maxNumberRange) {
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
function isAValidNumber(number, minRange, maxRange) {
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
var secondiDaAspettare = 5;
var numeriDelGioco = 5;
var numeriMinimi = 1;
var numeriMassimi = 100;
var arrayNumeriDaRicordare = [];
var arrayNumeriUtente = [];
var arrayNumeriRicordati = [];

// EFFETTIVO LANCIO DEL GIOCO
arrayOfUniqueRandomNumbersOrdered(arrayNumeriDaRicordare, numeriDelGioco, numeriMinimi, numeriMassimi);

alert('I numeri che devi ricordare sono ' + arrayNumeriDaRicordare + '\nHai ' + secondiDaAspettare + ' secondi per vedere se riesci a ricordarli!');

var countdown = setInterval(function() {
  secondiDaAspettare--;
  if (secondiDaAspettare === 1) {
    document.getElementById('counter').innerText = 'Mancano: ' + secondiDaAspettare + ' secondo';
  } else {
    document.getElementById('counter').innerText = 'Mancano: ' + secondiDaAspettare + ' secondi';
  }
  if (secondiDaAspettare === 0) {
    clearInterval(countdown);
  }
}, 1000);

setTimeout(function() {
  while (arrayNumeriUtente.length < numeriDelGioco) {
    var numeroInserito = parseInt(prompt('Scrivi il ' + (arrayNumeriUtente.length + 1) + '° numero che ti ricordi'));
    if (arrayNumeriUtente.includes(numeroInserito)) {
      alert('Hai già inserito questo numero. Riprova');
    } else if (!isAValidNumber(numeroInserito, numeriMinimi, numeriMassimi)){
      alert('Inserisci solo numeri compresi tra ' + numeriMinimi + ' e ' + numeriMassimi);
    } else {
      arrayNumeriUtente.push(numeroInserito);
      if (arrayNumeriDaRicordare.includes(numeroInserito)) {
        arrayNumeriRicordati.push(' ' + numeroInserito);
      }
    }
  }
  console.log(arrayNumeriUtente);
  console.log(arrayNumeriRicordati);
  switch (arrayNumeriRicordati.length) {
    case 1:
      alert('Hai ricordato ' + arrayNumeriRicordati.length + ' numero.\nCioè:' + arrayNumeriRicordati + '. Puoi fare di meglio! ' + String.fromCodePoint(0x1F609));
    break;
    case 0:
      alert('Non hai ricordato nessun numero.\nSei \'na pippa ar sugo! ' + String.fromCodePoint(0x1F923));
    break;
    case arrayNumeriDaRicordare.length:
      alert('Hai ricordato tutti i numeri.\nBig brain guy here! ' + String.fromCodePoint(0x1F60E));
    break;
    default:
      alert('Hai ricordato ' + arrayNumeriRicordati.length + ' numeri.\nCioè:' + arrayNumeriRicordati + ' ' + String.fromCodePoint(0x1F44D));
  }
  /* if (arrayNumeriRicordati.length === 1) {
    var emojiWinking = String.fromCodePoint(0x1F609);
    alert('Hai ricordato ' + arrayNumeriRicordati.length + ' numero.\nCioè:' + arrayNumeriRicordati + '. Puoi fare di meglio! ' + emojiWinking);
  } else if (arrayNumeriRicordati.length === 0) {
    var emojiLaughRolling = String.fromCodePoint(0x1F923);
    alert('Non hai ricordato nessun numero.\nSei \'na pippa ar sugo! ' + emojiLaughRolling);
  } else if (arrayNumeriRicordati.length === arrayNumeriDaRicordare.length) {
    var emojiNerd = String.fromCodePoint(0x1F60E);
    alert('Hai ricordato tutti i numeri.\nBig brain guy here! ' + emojiNerd);
  } else {
    var emojiThumbUp = String.fromCodePoint(0x1F44D);
    alert('Hai ricordato ' + arrayNumeriRicordati.length + ' numeri.\nCioè:' + arrayNumeriRicordati + ' ' + emojiThumbUp);
  } */
}, secondiDaAspettare * 1000 + 200);

console.log(arrayNumeriDaRicordare);
