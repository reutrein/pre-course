console.log("please choose a number LARGER than 10");

const input = require('readline-sync');
let num =input.question("user answer:");

    while (num < 10||isNaN(num))  {
    console.log("please choose a number LARGER than 10");
    num = input.question("user answer:");
     }
console.log("thank you");
  