
console.log('',("hello!welcome to the quiz!"),'\n',("first question"))

const input1 = require('readline-sync');
let question1 = ["Clean them!", "clean them and make sure to make  my family notice it", "I never noticed such a thing in my kitchen","taking something to eat and watch Netflix"];
let answer1 = input1.keyInSelect(question1, " What are you doing when you see dirty dishes in your kitchen?");
let num1 = parseInt (answer1);

console.log("second question")

const input2 = require('readline-sync');
let question2 = [" Eat that slowly and enjoy every bite", " Give it to my love ", "Share it with my love", "It is just a cookie- the others can have a choclate"];
let answer2 = input2.keyInSelect(question2, " The last cookie is left- what are going to do?");
let num2 = parseInt (answer2);

console.log("third question")

const input3 = require('readline-sync');
let question3 = ["Arrange the house and make her a good dinner", "Sharing with her the arrangements", " Tell her that difficulties make us stronger"," We all have this days"];
let answer3 = input3.keyInSelect(question3, "Your love came back home very tired- what are going to do?");
let num3 = parseInt (answer3);

console.log("fourth question")

const input4 = require('readline-sync');
let question4 = ["Try to avoid him, he will survive", " Share my umbrella with him of course", " Share my umbrella with him with an unpleasant face",  "Suggest him to buy one from the store"];
let answer4 = input4.keyInSelect(question4, "In a rainy day your friend forgot his umbrella-what shell you do?");
let num4 = parseInt (answer4);

console.log("fifth question")
const input5 = require('readline-sync');
let question5 = ["I will organize a surprise  party for him"," I will buy him a little present", " I will congratulate him", "Ignore it so he won't feel he's all that"];
let answer5 = input5.keyInSelect(question5, "your friend was promoted at work- how are you going to react?");
let num5 = parseInt (answer5);

var sum= num1+num2+num3+num4+num5;
if (sum<=2){
console.log('',("~~~~quiz results~~~"),'\n',( "you are a true angel"));    
}   
else if (sum<=7 && sum>2){
    console.log('',("~~~~quiz results~~~"),'\n',( "you are a nice person"));
}  
else if (sum>=12){
    console.log('',("~~~~quiz results~~~"),'\n',( "you are indifferent to your environment"));
}
else if (sum>=9 && sum<12){
console.log('',("~~~~quiz results~~~"),'\n',( "you are not an angel, you should reflect yourself"));
}

