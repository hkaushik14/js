// startic  properties and methods in JavaScript

class User{
    constructor(username){
        this.username = username;
}

logme(){
    console.log(`Username is ${this.username}`);
}
static createId(){
    return `123`
}
}

const harsh = new User("harsh");
// console.log(harsh.createId());


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
}}
const iphone = new Teacher("iphone","i@fb.com");
console.log(iphone.createId());
console.log(iphone);
console.log(Teacher.createId());