console.log ("enter a string with small vowels");
const input = require('readline-sync');
var str =input.question("user answer:");

while (str.indexOf('a') === -1 && str.indexOf ('e') === -1 && str.indexOf ('i')===-1 && str.indexOf ('o')===-1 && str.indexOf ('u')===-1 && str.indexOf ('y')===-1 ){
console.log ("this is not a string with small vowels, try again");
    const input = require('readline-sync');
    str =input.question("user answer:");
}


var result = str.replace(/[aeiouy]/g, function (char) {
    return char.toUpperCase();
});

console.log(result);

