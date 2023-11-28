console.clear();

/*
FOR EACH LOOP :
  ARRAY.forEach(function parameter)
  When we need to use index, then use regular for loop 
For Each loop the entire data from the array without using any index    


 Normal for each loop does not take function parameter 
*/
 
const array1 =['a','b','c'];
const array2 = [1,2,3];

// print all items of array1

array1.forEach(
function(eachItem){
  console.log(eachItem)
}
)

// print all items of array1 with arrow function

array1.forEach(
 eachItem => console.log(eachItem)
 
)
array2.forEach(eachNums=>console.log(eachNums))