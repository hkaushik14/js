const user = {
    username: 'Harsh',
    loginCount: 30,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details");
        // this.console.log(`Username is ${this.username}`);
        console.log(this); 
    }
}

// console.log(user.username);
// user.getUserDetails();
//     console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Hello ${this.username}`);
    }

    return this;
} 
const userOne = new User('Harsh', 30, true);
const userTwo = new User('John', 50, false);
console.log(userOne.constructor);
console.log(userOne);
// console.log(userTwo);

