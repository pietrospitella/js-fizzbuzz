// Scrivi un programma che stampi i numeri da 1 a 100,

var numbers = 100;

for (var i = 0; i < numbers; i++)
{
    var oneToHundred = i + 1;
       
    // Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

    if (oneToHundred  % 3 == 0 && oneToHundred % 5 == 0) {
        console.log("Fizz" + "Buzz");
    }
    // ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.

    else if (oneToHundred  % 3 == 0 ) {
        console.log("Fizz");
    }
    else if (oneToHundred  % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(oneToHundred);
    }    
    
}






