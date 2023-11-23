console.clear()

const s1 =5;

console.log(s1==5);    // True
console.log(s1=="5");  // True
console.log(s1==="5"); // False
console.log(s1!==5);   // False
console.log(s1!="5");  // False
console.log(s1!=="5"); // True

console.log(s1>5);     // False
console.log(s1>"4");   // True
console.log(s1>=5);    // True
console.log(s1>"6");   // False

let s2 = true;
let s3 = false;

console.log(s2 && true);        // True
console.log(s2 && s3);          // False
console.log(s2 && s3 && false); // False
console.log(s2 || s3 || false); // True

let s4 = null;
console.log(s2 && s4);          // null
console.log(s2 || s4);          // True
console.log(!s2);               // False
console.log(s4);                // null
console.log(!s4);               // True