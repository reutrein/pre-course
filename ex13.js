console.log ("enter a string just with several words (only words)");
const input = require('readline-sync');
let str =input.question("user answer:");
while(str.indexOf(' ') === -1) {
  console.log ("this is not a string with several words, try again, enter a string with several words (only words)");
  const input = require('readline-sync');
 str =input.question("user answer:");
}
let strletter;
let alphaExp = /^[a-zA-Z() ]+$/;
            if(str.match(alphaExp))
            {
             strletter= true;          }
            else{
              strletter= 
              false;
            }
while(strletter === false) {
  console.log ("this is not a string with words only, try again, enter a string with several words (only words)");
  const input = require('readline-sync');
  str =input.question("user answer:");
  if(str.match(alphaExp))
  {
   strletter= true;          }
  else{
    strletter= 
    false;
  }
}

const strArray = str.split(' ');

const sortedStrArray= strArray.sort( 
  (strA, strB) => {
    return strB.length- strA.length;
  }
)


console.log (sortedStrArray[0]);