console.clear();

/*
DESTRUCTURING :
  1. Object destructuring
  2. function destructuring
  3. array destructuring
*/

  // 1. object destruction 

  var user = {
    myName    : 'Sam',
    myLocation :'Dallas',
    myEmail    : 'sam@fakeemail.com'
  }

  console.log(user.myName);     // "Sam"
  console.log(user.myLocation);  // "Dallas"
  console.log(user.myEmail);     // "sam@fakeemail.com"

// or I can use container
var name1 = user.myName;
var location1 = user.myLocation;
var email1 =user.myEmail;

  console.log(name1);  // "Sam"
  console.log(location1);  // "Dallas"
  console.log(email1);  // "sam@fakeemail.com"

/*
  Destructuring the user objects 
  benefit is we can acsess the data directly without . or [] notation
  NOTE: key names must match to the original object 
  if keys does not match then data will be undefined 
  
  for example : 

  var {fName,myLocation,myEmail}=user;
  console.log(myName); // undefined because the is no fName key in the original user object
  */


 var {myName,myLocation,myEmail}=user;
 console.log(myName);      // "Sam"
 console.log(myLocation);  // "Dallas"
 console.log(myEmail);     // "sam@fakeemail.com"

// 2. function destructing 

function getUser(){
  return {
    name2 : 'Sam',
    location2:'NYC',
    email2: 'sam@gmail.com'
  }
}

// destructing the function

var {name2,location2,email2} = getUser();
console.log(name2);// "Sam"
console.log(location2);// "NYC"
console.log(email2);// "sam@gmail.com"


// 3. Array destructuring
 var user1 = ['Tim','LA','tim@yahoo.com'];

// without destructuring

var userName = user1[0];
var userLocation= user1[1];
var userEmail =user1[2];

console.log(userName); // "Tim"
console.log(userLocation); // "LA"
console.log(userEmail); // "tim@yahoo.com"

// with destructing 
//    ['Tim',    'LA',   'tim@yahoo.com']
var [userName,userLocation,userEmail]=user1;

console.log(userName); // "Tim"
console.log(userLocation); // "LA"
console.log(userEmail); // "tim@yahoo.com"

// Note : during array destructing, we can give any name we want

