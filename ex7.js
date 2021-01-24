console.log ("enter a positive number");
const input = require('readline-sync');
let num =input.question("user answer:");

function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
  while (num<=0||isNaN(num) )   {
    console.log("that is not a positive number, enter a positive number");
    num = input.question("user answer:");
  } 

console.log (num * factorialize(num - 1));
    
