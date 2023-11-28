console.clear();

/*
MAP :
  - a method of an array
  - take a function as parameter
  - returns a new array by using each item from the originol array
 
*/

 var numbers = [3,56,2,48,5];

 //1. function to calculates item * 2
  function double(x){
    return 2*x;
  }

 const newNumbers1= [5,6,7,8].map(double);// 
 console.log(newNumbers1); // [10, 12, 14, 16]


 /*
  getting each number from numbers array 
  and using inside the double function
  we are getting newNumbers1 array as a new array
 */ 
 const newNumbers2= numbers.map(double);
console.log(newNumbers2); // [6, 112, 4, 96, 10]

 // we can pass a function directly inside the map
const newNumbers3 = numbers.map(function double(x){
    return 10*x;
  })
console.log(newNumbers3); // [30, 560, 20, 480, 50]


// Arrow function with map
/* get each number item from array then multiply by 3 and store in newNumbers4 array*/
const newNumbers4= numbers.map(x=>x*3);
console.log(newNumbers4); // [9, 168, 6, 144, 15]

// without map function how can achive same thing
// do same thing with for each loop
// a little bit more work without map

const newNumbers5=[];
numbers.forEach(
  x=>newNumbers5.push(x*3)
);
console.log(newNumbers5); // [9, 168, 6, 144, 15]

