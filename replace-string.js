const prompCreator = require('prompt-sync');

const prompt = prompCreator();

// DO NOT CHANGE THE LINE BELOW.
const myString = prompt('Enter a string: ');

console.log("myString is '" + myString + "'");

// TODO: replace all occurences of 'o' with '0' in `myString` defined above.
// NOTE: DO NOT HARD CODE THE SIZE OF `myString`. When you change the value
// of `myString`, the test should still pass.
let newString = undefined;

// DO NOT CHANGE ANYTHING BELOW THIS LINE.

console.log("newString is '" + newString + "'");

module.exports = {
  myString,
  newString,
};
