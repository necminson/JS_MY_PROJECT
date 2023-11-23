/*
Ternary
*/
console.clear()

const x = 5 , y=6;

x>y ? console.log('logic 1'):console.log('logic 2');  // "logic 2"

const isExpensive = x>4 ? 'Expensive': 'cheap';
console.log(isExpensive); // "Expensive"

let result01 = x>4 ? (y>4 ? ('logic 1'):('logic 2')):('logic 3'); // "logic 1"
console.log(result01);

let result02 = x>4 ? (y<4 ? ('logic 1'):('logic 2')):('logic 3'); // "logic 2"
console.log(result02);

let result03 = x<4 ? (y<4 ? ('logic 1'):('logic 2')):('logic 3'); // "logic 3"
console.log(result03);