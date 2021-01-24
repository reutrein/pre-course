console.log ("enter a positive whole number");
const input = require('readline-sync');
let int =input.question("user answer:");

while (isNaN(int)  || int % 1 !== 0 || int<=0)  {
    console.log ("this is not a positive whole number, try again");
    const input = require('readline-sync');
    int =input.question("user answer:");
}
var arr = [];
for (var i=0, t=int; i<t; i++) {
    arr.push(Math.round(Math.random() * 49)+1)
}
console.log(arr);

console.log ("Min is", Math.min.apply( Math ,arr));   
console.log ("Max is", Math.max.apply( Math ,arr));


