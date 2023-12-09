console.clear();

// every(); returns a boolean 
// return true if condition is true return false otherwise
var numbers = [5,3,7,3,-6,11]
var items =[5,3,7,3,-6,11,true,'apple']
// check if All items are less than 12
// return true if All items are less than 12 return false otherwise
var isTrue = numbers.every(eachNum => eachNum<12);
console.log(isTrue); // true

isTrue = numbers.every(eachNum => eachNum<10);
console.log(isTrue); // false

isTrue = items.every(input=> input<15)
console.log(isTrue); // false

//  some(); returns a boolean 
// returns true if condition is true for at least 1 element 
// return false otherwise

isTrue = numbers.some(eachNum => eachNum<10);
console.log(isTrue); // true

// check if the array has any negative number 
isTrue = numbers.some(eachNum => eachNum<0);
console.log(isTrue); // true

// check if items array has apple

isTrue = items.some(input=> input==='apple')
console.log(isTrue); // true

// check if items array has apple

isTrue = items.some(input=> input==='orange')
console.log(isTrue); // false

