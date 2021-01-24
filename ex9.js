const input = require('readline-sync');

let n = input.question("please choose a number LARGER than 1: ");
while (n<=1||isNaN(n) )  {
    console.log("that is not a number LARGER than 1");
    n = input.question("please choose a number LARGER than 1:");
  } 
  console.log("the prime numbers between 1 and",+n);

for (var counter = 2; counter <= n; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log (counter); 
    }
}