console.clear()

/*
Objects : 

In Js the referance types:
Function
Object
Array

{} is used to create an object
*/

// Traditional way to create data 
var fName = 'John';
var lName = 'Cash';
var age = 18;
console.log(`${fName}  ${lName}  ${age}`)

var person = {
  fName:'John',
  lName:'Cash',
  age:18,
  isEmployed:true
};

// Calling the data from person object
// NOTE : W e can call data using . notation or [] notation
// . notation is more common




console.log(person) 
/*
 console result : 
 
[object Object] {
  age: 18,
  fName: "John",
  isEmployed: true,
  lName: "Cash"
}
*/ 


// calling single data from person using . notation
console.log(person.fName) // "John"
console.log(typeof(person.fName)) // "string"
console.log(person.lName) // "Cash"
console.log(person.age) //18
console.log(person.isEmployed) //true
console.log(typeof(person.isEmployed)) //"boolean"

// calling single data from person using [] notation

console.log(person['fName']) // "John"
console.log(typeof(person['fName'])) // "String"

