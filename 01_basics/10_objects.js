// objects

// singleton object, constructor function, class


// object literal

const mySym = Symbol('id');
const JsUser={
    name: 'Alice',
    age: 30,
    [mySym]: 12345,
    isAdmin: true,
    location: 'USA',
    skills: ['JavaScript', 'React', 'Node.js'],
}

// console.log(JsUser);
// console.log(JsUser["age"]);
// console.log(JsUser.mySym); // undefined
// console.log(JsUser[mySym]); // 12345

// adding new property
JsUser.email = "harshkaushik@gmail.com";
console.log(JsUser);

// deleting property
delete JsUser.location;
console.log(JsUser);

// changing value 
JsUser.age = 31;
console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello, my name is ${this.name}`);
}
JsUser.greeting();