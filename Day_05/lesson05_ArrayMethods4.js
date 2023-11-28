console.clear();

/*
ARRAYS :
Arrays are special type of objects
we use index to get the values in array 
we use [] to create arrays
*/

// 8. concat -> combines arrays

var drinks=['water','coke','fanta','tea'];
var snacks=['sunchips','gold fish','nuts','popcorn'];

var foods = drinks.concat(snacks);
console.log(foods);// ["water", "coke", "fanta", "tea", "sunchips", "gold fish", "nuts", "popcorn"]


// 9. slice(startIndex(inc),endIndex(exc)) -> cuts the slice (similar to substring)

var myFoods = foods.slice(1,5);
console.log(myFoods);// ["coke", "fanta", "tea", "sunchips"]

var mySnacks = snacks.slice(2);
console.log(mySnacks);// ["nuts", "popcorn"]

// negative index means start from the end
var myDrinks = drinks.slice(-1); // starts from last index till the end
console.log(myDrinks);// ["tea"]

// 10. join -> returns a string. we can combine the items of the array using join

// water- coke - fanta - tea
// drink array :['water','coke','fanta','tea']
const joinedItems1 = drinks.join('')
console.log(joinedItems1);// "watercokefantatea"

const joinedItems2 = drinks.join(',')
console.log(joinedItems2);// "water,coke,fanta,tea"
