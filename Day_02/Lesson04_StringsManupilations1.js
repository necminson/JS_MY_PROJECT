console.clear();
/*
String Manupilations :


*/

// Getting an input from user 

let name = prompt('Enter your Name');
console.log('My name is '+name); // "My name is Necmettin"



let tweet = prompt('Write your tweet ')
console.log(tweet) // "abaragandi"

let numOfChar = tweet.length;

const maxLength = 280;

console.log(`Sent : ${numOfChar} \n Remaining : ${maxLength-numOfChar}`) // "Sent : 10 
                                                                             Remaining : 270"