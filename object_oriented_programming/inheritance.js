class user {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class TEacher extends user {
    constructor(username, email, password){
        super (username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`Course added by ${this.username}`);
    }
}

const chai = new TEacher("chai","chai@gmail.com","1234");
chai.logMe();
chai.addCourse();

const masalaChai = new user("masalaChai");
masalaChai.logMe();

console.log(chai===masalaChai);
console.log(chai instanceof TEacher);