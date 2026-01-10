// function

function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");

}

// sayMyName();

function addtewoNumbers(num1, num2){
    console.log(num1 + num2);

    // let sum = num1 + num2;
    // return sum;
    return num1 + num2;

}
const result = addtewoNumbers(5, 7);
// console.log(result);

function loginUserMessage(username){
    if(username === undefined){
        return "Please enter username";
    }
    return `${username} just logged in!`;

}


console.log(loginUserMessage('harshkaushik'));

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(100,200,400));

const user ={
    username : 'harsh',
    price : 199
}

function handleObject(anyObject){
    console.log('username is ${anyObject.username} and price is ${anyObject.price}');
}

// handleObject(user);
handleObject({username: 'kaushik', price: 299});

const myNewArray = [1,2,3,4,5];
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
