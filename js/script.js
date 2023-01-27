// return a random number between a 'min' and a 'max' number
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// return an array of random numbers
function randomNumbersArray(length, min, max) {
    var arr = [];

    for (var i = 0; i < length; i++)
        arr.push(randomNum(min, max));

    return arr;
}


// variables
var output = document.querySelector('#app h2');
var numbers = 5, minRange = 1, maxRange = 10, seconds = 10, counting = 0;
var arrNumbersUser = [], correctNumbers = [];
var numberUser;


// setting an array of random numbers
var arrNumbers = randomNumbersArray(numbers, minRange, maxRange);

// showing the numbers to guess
alert('I numeri da ricordare sono ' + arrNumbers.join(', ') + '.');

output.innerHTML = 'Inserisci quanti più numeri corretti visti in alert<br>la sfida inizia tra: <span id="countdown">' + seconds + '</span>';

// countdown in page every 1 second
var countdown = setInterval(function() {
    counting++;

    if (counting >= seconds)
        clearInterval(countdown);

    document.querySelector('#countdown').innerText = seconds - counting;
}, 1000);

// after 10 seconds starts to asking the number to remember
setTimeout(function() {
    var count = 0;

    // insert the exact number of numbers to guess
    while (count < arrNumbers.length) {
        numberUser = parseInt(prompt('Inserisci il ' + (count + 1) + '° numero'));

        // repeat if the input isn't a number
        if (isNaN(numberUser)) {
            alert('Ricordati di inserire solo numeri');

        } else {
            // collecting in an array to guessed numbers
            arrNumbersUser.push(numberUser);

            // collecting in an array the correct numbers
            if (arrNumbers[count] === arrNumbersUser[count])
                correctNumbers.push(numberUser);

            count++;
        }
    }

    // printing the results
    var text = 'I numeri da ricordare erano: ' + arrNumbers.join(', ') + '<br>I numeri che hai inserito sono stati: ' + arrNumbersUser.join(', ') + '<br>';

    if (correctNumbers.length === 0) {
        text += 'Non hai ricordato nessun numero';

    } else {
        text += 'Hai ricordato ' + correctNumbers.length + ' numer' + (correctNumbers.length !== 1 ? 'i' : 'o') + ': ' + correctNumbers.join(', ');
    }

    output.innerHTML = text;
}, seconds * 1000 + 200);