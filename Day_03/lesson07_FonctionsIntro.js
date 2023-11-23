console.clear()

/*
Function intro : 
*/

// 1. Declaring function

function greet(){
  console.log('Hi, How are you?' )
}

// 2. calling the function
greet(); // "Hi, How are you?"

// Declaring function with 1 parameter
function greetYourGuy(guy){
  console.log(`Hi, ${guy}`)
}

greetYourGuy('Hasan') // "Hi, Hasan"
greetYourGuy(45) // "Hi, 45"
greetYourGuy(true) // "Hi, true"

// Declaring function with multiple parameter
function personInfo(fName,lName,age,location,isWorking){
  console.log(`${fName},${lName},${age},${location},${isWorking}`)
}
personInfo('Necmettin','Karadeli',52,'Kayseri',false) // "Necmettin,Karadeli,52,Kayseri,false"
personInfo('Necmettin','Karadeli',52)  // "Necmettin,Karadeli,52,undefined,undefined"
personInfo('Necmettin','Karadeli','Kayseri',false) // "Necmettin,Karadeli,Kayseri,false,undefined"
