/*
String Manupilations
*/
console.clear()

// concat() : used to concatanate the strings 

let fName = 'John';
let lName = 'Walker';


console.log(fName +' '+ lName);   // "John Walker"
console.log(fName.concat(lName)); // "JohnWalker"


// trim() : remove spaces from the beginning and the end 

let words = ' Today is thursday ';

let trimmedWord = words.trim();

console.log(words); // " Today is thursday "
console.log(trimmedWord); // "Today is thursday"

// charAt(index) : return the character at that index. index begins with zero 

console.log(words.charAt(4));// "a"

// split(character) : returns an array that is splitted fron this characater 

let splitted = words.split(' ');
console.log(splitted);  // ["", "Today", "is", "thursday", ""]
console.log(trimmedWord.split(" ")); // ["Today", "is", "thursday"]

let names = 'Ali,Veli,Selami';
let arrayNames = names.split(',');
console.log(arrayNames); // ["Ali", "Veli", "Selami"]
