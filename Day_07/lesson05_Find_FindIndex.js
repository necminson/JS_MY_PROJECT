console.clear();

// find(); returns the first item that matches with the condition
// 
var numbers = [5,3,7,13,-6,11,16,2,90]
var myNum= numbers.find(t=>t>10)
console.log(myNum)// 13

// findIndex(); return the index of the item that matches with the condition

myNum = numbers.findIndex(t=> t>10)
console.log(myNum)// 3 index of the firs number that is > 10