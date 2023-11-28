console.clear();

/*
FOR LOOP :
  
 
*/
  for( let i=0 ; i<=5 ; i++){
    console.log(i) // print from 0 to 5 as number
    console.log(`${i}`) // // print from 0 to 5 as string
  }

const todos = [
  
  {
    id         :1,
    task       :'eat',
    isComplete :true
      },
  {
    id         :2,
    task       :'shopping',
    isComplete :true
      },
  {
    id         :3,
    task       :'take out dog',
    isComplete :false
    
  }
]

console.log(todos);
console.log(todos[0]);// [object Object] { id: 1, isComplete: true, task: "eat"}
console.log(todos[0].task);// "eat"


// if I want to print only all task 


 for (let i=0; i<todos.length ; i++){
   console.log(todos[i].task)
 }

//"eat"
//"shopping"
//"take out dog"


// 1. USING MAP
// storing tasks using a map function

const map1=todos.map(
function tasks(eachItem){
  // this returns only tasks
  return eachItem.task
}
)
console.log(map1) // ["eat", "shopping", "take out dog"]

// 2. USING MAP AND ARROW FUNCTION
const map2= todos.map( eachItem => eachItem.task)
/*
eachItem-LOOP 1 is
[object Object] {
  id: 1,
  isComplete: true,
  task: "eat"
  }
eachItem-LOOP 2 is
[object Object] {
  id: 2,
  isComplete: true,
  task: "shopping"
  }
eachItem-LOOP 3 is
[object Object] {
  id: 3,
  isComplete: false,
  task: "take out dog"
  }
*/
console.log(map2) // ["eat", "shopping", "take out dog"]

// 3. FOR EACH 
// Creating empty array 
const taskArray =[];
 todos.forEach(eachItem =>taskArray.push(eachItem.task))

console.log(taskArray) //["eat", "shopping", "take out dog"]



