console.clear();

// fill(item); changes ALL original items with the given item
// and return a new array 
var numbers = [5,3,7,3,-6,11]
var filledWith1=numbers.fill(1);
console.log(filledWith1) // [1, 1, 1, 1, 1, 1]

// fill(item,startIndex(included),endIndex(excluded));

var fillSomeWithApple =numbers.fill('Apple',2,5);
console.log(fillSomeWithApple); // [1, 1, "Apple", "Apple", "Apple", 1]

/*
TASK : Write a function that return the array with the incremented numbers
Example 
fillNumbers(3); [1, 2, 3]
fillNumbers(6); [1, 2, 3, 4, 5, 6]
fillNumbers(10); [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/ 
// SOLUTION: 
function fillNumbers(length){
  
  return Array(length).fill(0).map((input,index)=>index+1)
  
}

console.log(fillNumbers(3)); // [1, 2, 3]
console.log(fillNumbers(6)); // [1, 2, 3, 4, 5, 6]
console.log(fillNumbers(10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
