// let myName = "harsh"
// console.log(myName.trueLength );// undefined;

let myHeros = ["thor", "spiderman", "ironman"];

let heroPower = {
    thor: "hammer",
    spiderman: "web",
    ironman: "suit",

    getSpiderPower: function(){
        console.log(`Spiderman power is ${this.spiderman}`);
    }
}

Object.prototype.harsh = function(){
    console.log('harsh is present in all objects');

}
Array.prototype.heyharsh = function(){
    console.log('hey harsh! you are amazing');
}
// heroPower.harsh();

myHeros.harsh();
myHeros.heyharsh();

const User = {
    name: "harsh",
    email: "harsh@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport ={
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment" ,
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, User);

let anotherUsernamer = "ChaiAurCode"

String.prototype.anotherUsername = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsernamer.trueLength()