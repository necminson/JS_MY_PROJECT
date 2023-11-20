console.clear();

/*
String Manupilations :

Ask use to enter a name and print "Name"
Make sure only the first initial is always capital and the rest always small

eg:
let name = necmettin;  =>>>>>> Necmettin
let name = nEcmettin;  =>>>>>> Necmettin
let name = NECMETTİN;  =>>>>>> Necmettin
*/

// Getting an input from user 

let name = prompt('Enter your Name');
console.log('Hello! '+name.toUpperCase().slice(0,1)+name.toLowerCase().slice(1)); // "Hello! Necmettin"

console.log('Hello! '+name.slice(0,1).toUpperCase()+name.slice(1).toLowerCase()); // "Hello! Necmettin"