console.clear();

/*
String Manupilations :


*/

// str.length
let str1 = 'I love Javascript';
let lenStr1 = str1.length;
console.log(lenStr1); // 17


// str.indexOf()  eg: Find index of 'love'

console.log(str1.indexOf('love')); // 2


// str.slice(startIndex,endIndex-optional)
// str.substring(startIndex,endIndex-optional)
// Note if there is no end index, then it will be the last index

console.log(str1.slice(3)); // "ove Javascript"

// if put -5,then it gives last 5 letters
console.log(str1.slice(-3)); // "ipt"
console.log(str1.slice(5,1)); // ""  note that startİnd>endInd

console.log(str1.substring(3)); // "ove Javascript"
console.log(str1.substring(-3)); // "I love Javascript"  negative nums behaves as 0
console.log(str1.substring(5,1)); // " lov"  order of indexes is not important