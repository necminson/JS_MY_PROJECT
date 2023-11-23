console.clear()

if (0){
  console.log(true)
}else{console.log(false)};  // false

if ("0"){ // String value as zero
    console.log(true)
  }else{console.log(false)};  // true
  
if (null){
  console.log(true)
}else{console.log(false)};  // false

if (false){
  console.log(true)
}else{console.log(false)};  // false

if (undefined){
  console.log(true)
}else{console.log(false)};  // false

if (""){
  console.log(true)
}else{console.log(false)};  // false

if (" "){ // there is a space character
    console.log(true)
  }else{console.log(false)};  // true

if (NaN){
  console.log(true)
}else{console.log(false)};  // false

if (5){
  console.log(true)
}else{console.log(false)};  // true

if ('Apple'){
  console.log(true)
}else{console.log(false)};  // true

// NOTE : 0 , false , null , undefined , "" , NaN considered as false. All others are true


const x=4 , y="4"  ,  z=5;

if (x==y){
  console.log('x and y are equal')
}else{console.log('x and y are NOT equal')};  // "x and y are equal"


if (x===y){
  console.log('x and y are equal')
}else{console.log('x and y are NOT equal')};  // "x and y are NOT equal"


if (x>=y && z>=y){  // true && true ===> true
  console.log('true')
}else{console.log('false')};  // "true"
