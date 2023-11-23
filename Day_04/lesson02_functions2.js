console.clear()

/*
Functions : 
We can use a function before declaring 
*/

add(2,3);  // 5
function add(x,y){
  console.log(x+y);
}

// function = keyword , add = name of the function
// anonymous function = function with no name

var sum = function (x,y){
  console.log(x+y);
}

sum(26.7,3.3);  // 30
sum()//NaN
sum(7,4,100) // 11 

// Create anaoymous function with 3 parameters (x,y,z)
// then put result in avariable named total
// call the function to print rhe result
// arguments 6,7,8 =>21

var total = function (x,y,z){
   console.log(x+y+z);
}

total(6,7,8) // 21
total(1,5,7) // 13



