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

// Change 'John' to 'Marry

friendList[3]='Mary';
 console.log(friendList); // ["sam", "tom", "tim", "Mary", "bob"]


// Adding data 
// Adding data in the index of 5 as 'Alex'
friendList[5]='Alex';
console.log(friendList); // ["sam", "tom", "tim", "Mary", "bob", "Alex"]

                                        
// Adding data in the index of 7 as 'Rahul'
friendList[7]='Rahul';
console.log(friendList); // ["sam", "tom", "tim", "Mary", "bob", "Alex", undefined, "Rahul"]

// Note : Whwn working arrays 
// 1. if there is already data in that index, then pervious data will be overriden
// 2. if there is no data in that index, then add the value in the index pervious data will be undefined


 

