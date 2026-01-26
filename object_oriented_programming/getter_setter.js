class User {
    constructor(password, email){
        this._password = password;
        this._email = email;
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        return this._email = value;
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password = value;
    }
}
const harsh = new User("abc","h@gmail.com");
console.log(harsh.password);
console.log(harsh.email);