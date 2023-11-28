console.clear();

/*
ARRAYS :
Arrays are special type of objects
we use index to get the values in array 
we use [] to create arrays
*/


// splice

// 1.splice(start) 

var months = ['Jan', 'March', 'April', 'June'];
months.splice(1);
// delete everything after the 1st index (including)
console.log(months); // ["Jan"]

// 2.splice(start, deleteCount)

 months = ['Jan', 'March', 'April', 'June'];
 months.splice(1,2);
// delete ONLY 2 after the 1st index (including)
console.log(months); // ["Jan", "June"]

// ex: delete ONLY 'March' from months array
months = ['Jan', 'March', 'April', 'June'];
 months.splice(1,1);
console.log(months); // ["Jan", "April", "June"]

// ex: delete ONLY 'April' from months array
months = ['Jan', 'March', 'April', 'June'];
 months.splice(2,1);
console.log(months); // ["Jan", "March", "June"]

// ex: delete  'April' and 'June' from months array
months = ['Jan', 'March', 'April', 'June'];
 months.splice(2,2); // months.splice(2); is also possible
console.log(months); // ["Jan", "March"]


// 3. splice(start, deleteCount, item1) 

months = ['Jan', 'March', 'April', 'June'];
months.splice(2,1,'May');
// delete ONLY 1 in the 2nd index (including) and inserts 'May' in the 2nd index
console.log(months); // ["Jan", "March", "May", "June"]

// 4. splice(start, deleteCount, item1, item2, /* …, */ itemN)

months = ['Jan', 'March', 'April', 'June'];
months.splice(2,1,'May','June','July','August');
// delete ONLY 1 in the 2nd index (including) and inserts 'May','June','July','August' from the 2nd index
console.log(months); // ["Jan", "March", "May", "June", "July", "August", "June"]


months = ['Jan', 'March', 'April', 'June'];
months.splice(2,0,'May','June','July','August');
// delete ONLY 0 in the 2nd index (including) and inserts 'May','June','July','August' from the 2nd index
console.log(months); // ["Jan", "March", "May", "June", "July", "August", "June"]



var fruits = ['apple','orange','banana',false,10];
console.log(fruits);
  
/*
 7. splice is used to delete or insert(add) items in any index in an array
 practice link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Splice
 
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, * ...,* 'itemN')
*/

fruits.splice(2,1)
console.log(fruits); // ["apple", "orange", false, 10]

fruits.splice(1,0,'kivi','peach');
console.log(fruits); // ["apple", "kivi", "peach", "orange", false, 10]

fruits.splice(2,2,'chery','srawberry','appricot');
console.log(fruits); // ["apple", "kivi","chery","srawberry","appricot" , false, 10]

// Note : negative number (like -1) means starting from last index

fruits.splice(-1,2);
console.log(fruits); // ["apple", "kivi", "chery", "srawberry", "appricot", false]

fruits.splice(-1,0,'tea','coffee'); // delete 0 item.Insert tea and coffe at -1 index
console.log(fruits); // ["apple", "kivi", "chery", "srawberry", "appricot", "tea", "coffee", false]


