console.clear();

/*
Strings :
'String'  single quote
"String"  double quote
'String'  `backtick -ES6` 
*/

let name = 'Necmettin';// "Necmettin"
console.log(name);

let surname = 'karadeli';
console.log(surname); // "karadeli"

let str1 = 'My name is '+name
console.log(str1); // "My name is Necmettin"

let str2 = "My name is 'Necmettin'"
console.log(str2); // "My name is 'Necmettin'"

let str3 = 'My name is \'Necmettin\'';
console.log(str3); // "My name is 'Necmettin'"


let firstName = 'Sam';
let lastName ='Walton';
let age = 50;
let location = 'Dallas'


// "First Name : Sam, Last Name : Walton, Age : 50, Location : Dallas"

let info1 = 'First Name : '+firstName+', Last Name : '+lastName+', Age : '+age+', Location : '+location ;
console.log(info1)

let info2 =`First Name : ${firstName}, Last Name : ${lastName}, Age : ${age}, Location : ${location}`
console.log(info2)