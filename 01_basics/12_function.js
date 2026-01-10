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

