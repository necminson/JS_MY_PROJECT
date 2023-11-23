console.clear();

/*
ARRAYS :
Arrays are special type of objects
we use index to get the values in array 
we use [] to create arrays
*/

// Declearing array
var friendList = ['sam','tom','tim','john','bob'];
var myFriendList = new Array('sam','tom','tim','john','bob');


console.log(friendList);  //  ["sam", "tom", "tim", "john", "bob"]
console.log(myFriendList); // ["sam", "tom", "tim", "john", "bob"]

console.log(typeof(friendList)); // "object"
console.log(typeof(myFriendList)); // "object"

// getting the value from the array
console.log(friendList[3]); //"john"

// when index is out of bound
console.log(friendList[5]); // undefined

// Editting array  (In the next lesson)

