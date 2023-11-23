console.clear()

/*
Functions : 
perform an action
calculate a value
*/

// Declaring function
 function sum(){
   var num1 = 4;
   var num2 = 5;
   var total = num1+num2;
   return total;
 }

console.log(sum()); // 9

const result = sum()+10;
console.log(result); // 19
// Function to calculate the ares of a square when the length os a sise is given

function areaOfASquare(sideLength){
  
  return sideLength*sideLength
}

console.log(areaOfASquare(5)); // 25

console.log(areaOfASquare()); // NaN
console.log(areaOfASquare(3,4,true,'jacvascript')); // sideLength = 3 so result is 9

var result1 = areaOfASquare(8)-1
console.log(result1); // 63

// We can assign DEFAULT values in the function parameter 
function add(x=2,y=3,z=4){
  return x+y+z;
}

console.log(add()) // 9  used default values
console.log(add(3,5,8)) // 16  overriding 3+5+8=16
console.log(add(5,9)) // 18 x=5 ,y=9 but z= 4 as a default value



