console.log("////////--------welcome to war--------\\\\\\\\");
const input1 = require('readline-sync');
let name = input1.question("Please enter your name: ");
console.log ("hello", name,  ".you currently have 50 ILS");
console.log ("place  your bet for the next round:1 to 50:")
const input2 = require('readline-sync');
let bet = input2.question (" ");
if ( bet < 1 || bet >50) {
    console.log ( "I said between 1 to 50 and you typed", bet, "!!");
    console.log ("I don't play with liars!!! Bye");
    throw 'Game over';
}
let betint = parseInt (bet);
let moneyp= 50;
let moneyp1 = (moneyp-betint);
let moneyp2 = (moneyp+betint);
let cardp= (Math.round((Math.random() * 11) + 1));
let cardc= (Math.round((Math.random() * 11) + 1));
console.log ("your card is", cardp, "and my card is", cardc);
if (cardp<=cardc && moneyp1>0) {
    console.log ("you lost", bet, " and now you have",moneyp1 );
    let answer  = ["play another round", "leave with my money :-)"]; 
    const input3 = require('readline-sync');
    var question = input3.keyInSelect(answer, "what would you like to do"); 
} else if (cardp>cardc) {
    answer  = ["play another round", "leave with my money :-)"]; 
    console.log("you won", bet, "!! and now you have", moneyp2);
 input3 = require('readline-sync');
  question = input3.keyInSelect(answer, "what would you like to do");
}else if (cardp<=cardc && moneyp1==0){
console.log ("you lost" ,bet, "and now you have 0" );
     throw 'you are broke...Bye Bye';
    }
    while (question!="1") {
    while (question=="0" && cardp>cardc) {
        moneyp= moneyp2;
        console.log ("place  your bet for the next round:1 to" , moneyp, ":")
const input2 = require('readline-sync');
bet = input2.question (" ");
if ( bet < 1 || bet > moneyp) {
    console.log ( "I said between 1 to", moneyp, "and you typed", bet, "!!");
    console.log ("I don't play with liars!!! Bye");
    throw 'Game over';
}
betint = parseInt (bet);
moneyp1 = (moneyp-betint);
moneyp2 = (moneyp+betint)
cardp= (Math.round((Math.random() * 11) + 1));
cardc= (Math.round((Math.random() * 11) + 1));
console.log ("your card is", cardp, "and my card is", cardc);
if (cardp<=cardc && moneyp1>0) {
    console.log ("you lost", bet, " and now you have",moneyp1 );
    answer  = ["play another round", "leave with my money :-)"]; 
    const input3 = require('readline-sync');
    question = input3.keyInSelect(answer, "what would you like to do"); 
} else if (cardp>cardc) {
 answer  = ["play another round", "leave with my money :-)"]; 
    console.log("you won", bet, "!! and now you have", moneyp2);
 input3 = require('readline-sync');
 question = input3.keyInSelect(answer, "what would you like to do");
}else if (cardp<=cardc && moneyp1==0){
console.log ("you lost" ,bet, "and now you have 0" );
     throw 'you are broke...Bye Bye';
    }
}
while (question=="0" && cardp<=cardc) {
    moneyp= moneyp1 ;
    console.log ("place  your bet for the next round:1 to" , moneyp, ":")
const input2 = require('readline-sync');
bet = input2.question (" ");
if ( bet < 1 || bet > moneyp) {
console.log ( "I said between 1 to", moneyp ,"and you typed", bet, "!!");
console.log ("I don't play with liars!!! Bye");
throw 'Game over';
}
betint = parseInt (bet);
moneyp1 = (moneyp-betint);
moneyp2 = (moneyp+betint)
cardp= (Math.round((Math.random() * 11) + 1));
cardc= (Math.round((Math.random() * 11) + 1));
console.log ("your card is", cardp, "and my card is", cardc);
if (cardp<=cardc && moneyp1>0) {
console.log ("you lost", bet, " and now you have",moneyp1 );
answer  = ["play another round", "leave with my money :-)"]; 
const input3 = require('readline-sync');
question = input3.keyInSelect(answer, "what would you like to do"); 
} else if (cardp>cardc) {
console.log("you won", bet, "!! and now you have", moneyp2);
answer  = ["play another round", "leave with my money :-)"]; 
input3 = require('readline-sync');
question = input3.keyInSelect(answer, "what would you like to do");
}else if (cardp<=cardc && moneyp1==0){
console.log ("you lost" ,bet, "and now you have 0" );
 throw 'you are broke...Bye Bye';
}
}
}

if (question=="1" && cardp>cardc) {
    console.log ("you earned" , moneyp2 );
throw 'goodbye';
} else if (question=="1" && cardp<=cardc){
    console.log ("you earned" , moneyp1 );
    throw 'goodbye';  
}
