console.clear();

/*
ARRAYS :
Arrays are special type of objects
we use index to get the values in array 
we use [] to create arrays
*/


var ages = [10,14,34,16,10];
console.log(ages);
console.log(typeof(ages));  // "object"

// indexOf(item)  returns first index of the item  or    indexOf(item ,startingIndex)  
// LastIndexOf(item)

console.log(ages.indexOf(10));  // 0
console.log(ages.indexOf(10,2));  // 4
console.log(ages.lastIndexOf(10));  // 4
console.log(ages.indexOf(100));  // -1  // there is no matching item


// includes(item)  -> returns true if item exist , if no it retuns false 
// includes(item,startingIndex)

console.log(ages.includes(14)); // true
console.log(ages.includes(14,3)); // false  'is there any 14 after index 3'
console.log(ages.includes('apple')); // false

const isExist = ages.includes(14);
console.log(isExist); // true


