console.clear()

/*
Nested Objects : 

In Js the referance types:
Function
Object
Array

{} is used to create an object
: is usd to create key-value pairs
, is used to add multiple key-value pairs
*/
/*
Create an object 
Name : personInfo
fName: Jim  -> String
lName:Carrey
age:50 -> number
address : {street:6th Ave. ,City: NYC , State : NY} -> object inside
hobbies : [soccer,fishing,hunting] -> array
salary : function that returns '100K yearly'
*/
var personInfo={
  fName:'Jim',
  lName:'Carrey',
  age:50,
  address:{
   street:'6th Ave.',
   city: 'NYC',
   state:'NY'
 },
  hobbies:['soccer','fishing','hunting'],
  salary:function(){
   return '100K yearly';
 }
    
}

console.log(personInfo);

console.log(personInfo.address.street) // "6th Ave."

const myState = personInfo.address.state;
console.log(myState); // "NY"



console.log(personInfo.hobbies)// ["soccer", "fishing", "hunting"]
console.log(personInfo.hobbies[0])// "soccer"
console.log(personInfo.hobbies[3]) // undefined

console.log(personInfo);