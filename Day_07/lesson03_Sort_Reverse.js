console.clear();

// reverse();

var numbers = [5,3,7,3,-6,11]
console.log(`Original : ${numbers} ` ); // "Original : 5,3,7,3,-6,11"
console.log(`Reversed : ${numbers.reverse()} ` ); // "Reversed : 11,-6,3,7,3,5"



// sort(); sorts the array items in ascending order (smallest to greatest)
console.log(`Sorted Asc : ${numbers.sort()} `)  // "Sorted Asc : -6,11,3,3,5,7 "
// decending order = sort()+reverse()
console.log(`Sorted Desc : ${numbers.sort().reverse()} `)  // "Sorted Desc : 7,5,3,3,11,-6 "
