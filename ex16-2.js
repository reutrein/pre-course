console.log ("enter several whole numbers with commmas between them");
const input = require('readline-sync');
let string =input.question("user answer:");
var splitString = string.split("");
var reverseArray = splitString.reverse();
var joinArray = reverseArray.join("");
console.log (joinArray);
for (var i = 0; i <= splitString.length - 1; i++) {
    if (splitString[i] % 1 !== 0)
    throw 'error- try again'
    }
