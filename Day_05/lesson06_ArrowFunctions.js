console.clear();

/*
ARROW FUNCTIONS :

*/

// Traditional function
function sum(a){
  return a+100;
}
console.log(sum(9));// 109

// anonymus function
var sum1 = function (a) {
  return a+100;
}
console.log(sum1(10)); // 110

// ------------ ARROW FUNCTION => case 1: one argument --------------
// 1. remove function keyword(function) and function name(sum)
// 2. use => BETWEEN THE PARAMETER BODY
// 3. use variable and store your arrow function
var arrow = (a)=>{
  return a+100
}
// calling the function

console.log(arrow(11)); // 111

// 4. OPTIONAL - delete remove curly braces and return keyword
var arrow1 = (a)=>a+100;
console.log(arrow1(12)); // 112


// 5. NOTE : WE CAN REMOVE THE PARANTHESIS AROND THE PARAMETER
// IF THERE IS ONLY ONE PARAMETER

var arrow2 = a=>a+100;
console.log(arrow1(13)); // 113

var squares = x=> x*x;
console.log(squares(6));// 36

// ---------------ARROW FUNCTION => case 2: functions more than one parameter -----------
// traditional
function sum2(a,b){
  return a+b+100;
}
console.log(sum2(10,20));// 130

// anonymus function

var sumResult2 = function (a,b){
  return a+b+100;
}

console.log(sumResult2(11,21))// 132

// With Arrow Function 
// 1. remove function keyword(function) and function name(sum)
// 2. use => BETWEEN THE PARAMETER BODY
// 3. use variable and store your arrow function

var arrow3 = (a,b)=>{
  return a+b+100;
}

console.log(arrow3(12,22))// 134

// Note: I cannot remove the paranthesis around the a,b parameters
// because there are more then one parameter


// ------------ ARROW FUNCTION => case3: functions with no parameter ---------------

// traditional
var x= 14, y=24;
function sum3(){
  return x+y+100
}
console.log(sum3());// 138

// anonymus function
var sumResult3=function(){
  return x+y+100
}

console.log(sumResult3()); // 138

// Arrow function
var arrow3=()=>{
  return x+y+100
}
console.log(arrow3()); // 138

// Optional: 
var arrow4=()=> x+y+100;
console.log(arrow4()); // 138 
// DONE !!!
