/*
Get 2 names from user and store variables : name1 and name2.
Create a variable loveScore and store the random number.
loveScore should be a random whole number between 1-100(incslusive) percent

Task 1: print 'name1 and name2's love score is loveScore'
     -- Try using  if and ternary -- 
Task 2: Print 'You love each other' if loveScore is >= 80%
Task 3: Print 'Modorate relationship' if loveScore isbetweeen 50% and 80%
Task 3: Print 'Not a strong relationship' otherwise

https://www.lovecalculator.com/
*/
console.clear()

// Step 1: getting names from user 
let name1 = prompt('Type your name')
let name2 = prompt("Type your darling's name")

console.log(`Hi! ${name1}`);
console.log(`your darling is ${name2}`);

// Step 2: finding loveScore

var loveScore = Math.ceil(Math.random()*100);
console.log(`${name1} and ${name2}'s love score is ${loveScore}%`)

// step 3: give direction about their relationship
let result = loveScore>= 80 ? ('You love each other'):(50<=loveScore<80? ('Modorate relationship'):('Not a strong relationship'))
console.log(result);

