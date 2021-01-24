const input = require('readline-sync');
const input2 = require('readline-sync');	
var pepole = input.question("How many people are you going with? ");

if (isNaN(pepole)  || pepole % 1 !== 0 || pepole<=0) {
    throw ' error';
}
var yesno= ["yes", "no"];
const input1 = require('readline-sync');
var kasher= input1.keyInSelect(yesno, "Should it be Kosher? ")

if (kasher== "0") {
  const input2 = require('readline-sync');
  var kashrut= input2.keyInSelect(yesno, "should it be Kashrut Lemehadrin? "); 
}
var foodtypes = ["dairy", "meat dish", "vegetarian"];
const input3 = require('readline-sync');
var favfood = input3.keyInSelect(foodtypes, "What kind of food do you want?");


  if (favfood== "0" && kasher== "0" && kashrut== "0") {  
  console.log("i recommend kafe Greg");
} else if (favfood == "1" && kasher== "0" && kashrut== "0"){
  console.log("i recommend shipudei tsipora");
} else if (favfood =="2" && kasher== "0" && kashrut== "0"){
console.log("i recommend vegi");
} else if (favfood == "0" && kasher== "0" && kashrut== "1"){
console.log("i recommend kafe kafe");
} else if (favfood == "1" && kasher== "0" && kashrut== "1"){
console.log("i recommend avazi");
} else if (favfood =="2" && kasher== "0" && kashrut== "1"){
console.log("i recommend labriut");
} else if (favfood =="0" && kasher== "1"){
console.log("i recommend oliveri");
} else if (favfood =="1" && kasher== "1"){
console.log("i recommend makom shel basar");
} else if (favfood =="2" && kasher== "1"){
console.log("i recommend goddens");
}

  



