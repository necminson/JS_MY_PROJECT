console.clear();

/*
ARRAYS :
Arrays are special type of objects
we use index to get the values in array 
we use [] to create arrays
*/

// Declearing array
var friendList = ['sam','tom','tim','john','bob'];

/*
1. push()   : add element at the end of the element
2. unshift(): add element at the beginning of the element
3. pop()    : remove the last element of the array
4. shift    : remove the first element of the array
*/

console.log(friendList) // ["sam", "tom", "tim", "john", "bob"]
friendList.push('jack');
console.log(friendList)  // ["sam", "tom", "tim", "john", "bob", "jack"]


console.log(friendList) // ["sam", "tom", "tim", "john", "bob", "jack"]
friendList.unshift('fred');
console.log(friendList)  // ["fred", "sam", "tom", "tim", "john", "bob", "jack"]

console.log(friendList) // ["fred", "sam", "tom", "tim", "john", "bob", "jack"]
friendList.pop();
console.log(friendList)  // ["fred", "sam", "tom", "tim", "john", "bob"]

console.log(friendList) // ["fred", "sam", "tom", "tim", "john", "bob"]
friendList.shift();
console.log(friendList)  // ["sam", "tom", "tim", "john", "bob"]


 