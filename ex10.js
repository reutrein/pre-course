console.log ("enter a string with at least one space");
const input = require('readline-sync');
let browserType =input.question("user answer:");
        
while(browserType.indexOf(' ') === -1) {
    console.log ("this is not a string with at least one space, try again");
    const input = require('readline-sync');
    browserType =input.question("user answer:");
}
browserType= browserType.replace(/ /g ,'*');
console.log (browserType);


