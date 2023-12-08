console.clear()
/*
Spread Operator (... operator)
Spread Operator is used to spread out data from arrays,objects or functions
... is used in front of the arrays,objects or functions
we can use spread operator:
1. function calls
2. array literals
3. object literals

*/

// 1. functions

var minNum = Math.min(45,-23,34,3,-234,300)
console.log(minNum); // -234 because data is already spread out

  const someNums=[45,-23,34,3,-234,300];
minNum = Math.min(someNums);
console.log(minNum); // NaN  Because someNums is one single argument


// using spread operator

minNum = Math.min(...someNums); // same as Math.min(45,-23,34,3,-234,300)
console.log(minNum);  // -234

// We can use spread opreator with Strings 
const favActors = ["Cüneyt Arkın","Kemal Sunal","Adile Naşit"]
console.log(favActors); // ["Cüneyt Arkın", "Kemal Sunal", "Adile Naşit"]
console.log(...favActors);// 
/*
"Cüneyt Arkın"
"Kemal Sunal"
"Adile Naşit"
*/

// strings 
const myFavNumber = "71";
console.log(Math.min(myFavNumber)); // 71
console.log(Math.min(...myFavNumber)); // 1

// we can pass Strings directly in functions with spread operator
console.log(Math.max(..."2378647848778687238")); // 8

/*
2. Arrays 
most common usage with spread operators
we can spread one array into another array
*/ 

const existingNums=[2,4,-8,5,-9,34,38];
const newAddedNums=[-1,23,45];

var allNums =[existingNums,newAddedNums];
console.log(allNums)// [[2, 4, -8, 5, -9, 34, 38], [-1, 23, 45]]

 allNums =[...existingNums,...newAddedNums];
console.log(allNums) // [2, 4, -8, 5, -9, 34, 38, -1, 23, 45]

allNums =[...newAddedNums,...existingNums];
console.log(allNums) // [-1, 23, 45, 2, 4, -8, 5, -9, 34, 38]


allNums =[38,...newAddedNums,true,...existingNums,'Kayseri'];
console.log(allNums) // [38, -1, 23, 45, true, 2, 4, -8, 5, -9, 34, 38, "Kayseri"]

const languages= ['Java','Javascript','Pyton'];
const duty = ['develop','test','deploy'];

const skills = [38,'Kayseri', ...languages,34,'İstanbul', ...duty,'Kolay gelsin']
console.log(skills); // [38,"Kayseri","Java","Javascript","Pyton",34,"İstanbul","develop","test","deploy","Kolay gelsin"]

// we can use spread operator to get a copy of the original array
// geting the copy of the languages array 

var copyOfLanguages =languages;
console.log(copyOfLanguages); // ["Java", "Javascript", "Pyton"]
// languages and copyOfLanguages are pointing same place in the memory
// If I make an update one array the other one will be changed as well

copyOfLanguages.push('C++')
console.log(languages); // ["Java", "Javascript", "Pyton", "C++"]

// with spread operator we can make new copy of the original array 
// so when I edit copy, original not be affected

var copyWithSpread = [...languages];
console.log(copyWithSpread);  // ["Java", "Javascript", "Pyton", "C++"]
copyWithSpread.push('rubby'); 
console.log(copyWithSpread); // ["Java", "Javascript", "Pyton", "C++", "rubby"]
console.log(languages);// ["Java", "Javascript", "Pyton", "C++"]
// when I make a change in the copy array, then the original is not effected


// Objects ; spred operator can be used with objects


const fullName= {
  firstname:'Necmettin',
  lastname:'Karadeli'
  
}

var userInfo={
  fullName,  // fullName is inserted as an OBJECT
  id:1,
  username:'007'
};


console.log(userInfo)
/*
[object Object] {
  fullName: [object Object] {
    firstname: "Necmettin",
    lastname: "Karadeli"
  },
  id: 1,
  username: "007"
}
*/

 userInfo={
  ...fullName,  // fullName is inserted with spread operator
  id:1,
  username:'007'
};
console.log(userInfo)
/*
[object Object] {
  firstname: "Necmettin",
  id: 1,
  lastname: "Karadeli",
  username: "007"
}
*/


