console.clear()

/*
Objects : 

In Js the referance types:
Function
Object
Array

{} is used to create an object
*/

var person = {
  fName:'John',
  lName:'Cash',
  age:18,
  isEmployed:true
};

// we can edit values using . or []

console.log(person.fName)// "John" 

person.fName ='Sam';
console.log(person.fName)// "Sam" 

console.log(person.isEmployed)// true 
person.isEmployed =false;
console.log(person.isEmployed)// false 

console.log(person.lName)// "Cash" 
person['lName']= 'Blair'
console.log(person.lName)// "Blair" 


// We can edit fName (Key)
console.log(person)
/*
[object Object] {
  age: 18,
  fName: "Sam",
  isEmployed: false,
  lName: "Blair"
}
*/
var newName ='fName'
person.newName ='William';

console.log(person)
/*
[object Object] {
  age: 18,
  fName: "Sam",
  isEmployed: false,
  lName: "Blair",
  newName: "William"
}
*/



