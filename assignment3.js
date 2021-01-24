var num=10
console.log ("you have", num ,"guesses")
var words = ['rain', 'yes', 'children'];
var ranword = words[Math.floor(Math.random()*words.length)];
var x=  (ranword.replace(/./g, '*'));
var xarr= x.split('');
console.log ('',("The word is:"),'\n',x);
const input = require('readline-sync');
console.log ("What is your guess? ");
let guess = input.question (" ");
guess=guess.toLowerCase();
while (guess.length>1 || guess.match(/^[a-zA-Z()]+$/)=== null) {
console.log ("please enter only one charachter");
console.log ("you have", num ,"guesses")
console.log ("What is your guess? ");
guess = input.question (" ");
}
while (num!==0) {

    while(ranword.indexOf(guess)!== -1) {

    
        for (var i=0; i <= ((ranword.length)-1); i++) {
        
            if (guess== ranword.charAt(i)) {
         xarr[i]= guess;  
        x= xarr.join("");
    
        }
        console.log ("you have", num  ,"guesses")
        console.log ('',("The word is:"),'\n',x);
        console.log ("What is your guess? ");
        guess = input.question (" ");
        while (guess.length>1 || guess.match(/^[a-zA-Z()]+$/)=== null) {
            console.log ("please enter only one charachter");
            console.log ("you have", num ,"guesses")
            console.log ("What is your guess? ");
            guess = input.question (" ");
            }
        }
    }
    while(ranword.indexOf(guess) === -1) {
            num= num-1;
            console.log ("you have", num  ,"gusses")
        console.log ('',("The word is:"),'\n',x);
        console.log ("What is your guess? ");
        guess = input.question (" ");
        while (guess.length>1 || guess.match(/^[a-zA-Z()]+$/)=== null) {
            console.log ("please enter only one charachter");
            console.log ("you have", num ,"gusses")
            console.log ("What is your guess? ");
            guess = input.question (" ");
            }
        }
            
    }
    if (num===0) {
        console.log ("your guesses are off");
    }else if(x.indexOf('*')===-1){
    console.log ("wow you are good!!!")
    }