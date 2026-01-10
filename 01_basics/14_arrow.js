
// old version of function
const user ={
    username: "john_doe",
    price : 100,

    welcomeMessage: function(){
        console.log("Welcome " + this.username);
    },
}

// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "alice"
//     console.log(this);
// }
// chai()

const chai = function(){
    let username = "alice"
    console.log(this.username);
}
chai()

const addtwo = (num1,num2) => {
    return num1 + num2
}

const myarray = [1,2,3,4,5]
myarray.forEach((element) => {
    // console.log(element);
});