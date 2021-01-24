console.log ("enter several whole numbers with commmas between them");
const input = require('readline-sync');
let string =input.question("user answer:");
var arr = JSON.parse("[" + string + "]");

for (var i = 0; i <= arr.length - 1; i++) {
if (arr[i] % 1 !== 0)
throw 'error- try again'
}
function reverseArrayInPlace(arr) {
    for (var i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
       let el = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = el;
    }
    return arr;
}
reverseArrayInPlace(arr);
  console.log (arr);