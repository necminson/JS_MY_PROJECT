console.clear();

/*
FILTER :
 array.filter(function parameter)
 
 when we want to use a condition then we can use filter
 return the data that meets specific condition
 
*/
 
var numbers = [8,1,4,12,66,3];

// store the numbers that are only greater than 10

const filteredArray = numbers.filter(
 function(eachNums){
  return eachNums>10
 }

)
 console.log(filteredArray) // [12, 66]
 
 // With arrow function
 const filteredArray1 = numbers.filter(eachNums => eachNums>10)
   
 console.log(filteredArray1) // [12, 66]
 
 // with forEach
const filteredArray2 =[];
numbers.forEach(eachNums => eachNums>10 ? filteredArray2.push(eachNums):'')
console.log(filteredArray2) // [12, 66]
