console.clear();

/*
Primitive data Types inJS
String, number, boolean, null, undefined
*/

var myName = 'javascript';
console.log(typeof(myName)); //"string"

var myName = "java";
console.log(typeof(myName)); //"string"

/*
Number literal
we only have number data type. No int, double, byte etc...
*/

var myNum = 20;
console.log(typeof(myNum));// "number"

myNum = 20.98;
console.log(typeof(myNum));// "number"

var myNum = 20/0;
console.log(myNum);// Infinity
console.log(typeof(myNum));// "number"

var num1 = 20+'a';
console.log(num1); // "20a"
console.log(typeof(num1)); //"string"

var num2 = 'a'+20;
console.log(num2); // "a20"
console.log(typeof(num2)); //"string"

/*
boolean 
True or False
*/

var isExist; 
isExist= true;
console.log(isExist); // true 
console.log(typeof(isExist)); // "boolean"

isExist= false;
console.log(isExist); // false
console.log(typeof(isExist)); // "boolean"

/*
null
*/

var pickedColor = null;
console.log(pickedColor); // null
console.log(typeof(pickedColor)); // "object"

/*
undefined
*/

var selectedCar;
console.log(selectedCar); //undefined
console.log(typeof(selectedCar)); // undefined


var selectedCar = undefined
console.log(selectedCar); //undefined
console.log(typeof(selectedCar)); // undefined