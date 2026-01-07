// console.log(2>1);
// console.log(2<1);
// console.log(2>=2);
// console.log(2<=2);
// console.log(2==2);
// console.log(2!=2);
// console.log(2==="2"); //type + value
// console.log(2!=="2"); //type + value

// console.log(null>0);
// console.log(null>=0);
// console.log(null==0);

// console.log(undefined>0);
// console.log(undefined<0);
// console.log(undefined==0);

// console.log("2"===2); // check type + value
// console.log("2"==2);  // only value

// Primitive

// 7 tpes
// number
// string
// boolean
// null
// undefined
// symbol
// bigInt
const score =100
const scoreValue = 100.3
const isLoggedIn =null
const outsideTemp = null
let userEmail; // undefined
const id = Symbol("1234")
const anotherid = Symbol("1234")
console.log(id===anotherid); // false
const bigNumber = 1234567890123456789012345678901234567890n


// JAVASCRIPT IS A DYNAMICALLY TYPED LANGUAGE
// Object - non-primitive
// reference type
// array
// function
// date
// etc  
// Object comparison
const myArray = [1,2,3]

let myObj={
    name:"harsh",
    age:21,
}
const myFunctiion = function(){
    console.log("hello world");
}

console.log(typeof myArray);
console.log(typeof myObj);
console.log(typeof myFunctiion);

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive) value vs heap (non-primitive) REREFERENCE TYPE
let myyoutubename = "harshkaushik494"
let anothername = myyoutubename
anothername = "harshkaushik"

console.log(anothername);
console.log(myyoutubename);

let userOne = {
    email:"user@gmail.com",
    upi: "userid@okaxis"
}

let userTwo = userOne
userTwo.email = "user2@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);