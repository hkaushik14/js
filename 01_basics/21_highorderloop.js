// [{},{},{question:"What will be the output of the following code?",options:["5","6","Error","Undefined"],answer:2,explanation:"The function addtwo is called before it is defined. In JavaScript, function expressions are not hoisted, so calling addtwo before its definition results in a TypeError."}]

const arr = [1,2,3,4,5]

for(const num of arr){
    // console.log(num);
}   


const greetings = ["Hello", "Hi", "Hey", "Welcome"]
for(const greet of greetings){
    // console.log(greet);
}   


// Maps 
const user = new Map()
user.set("username", "john_doe")
user.set("email", "john@example.com")

console.log(user);

for(const [key,value]  of user){
    console.log(key + " : " + value);
}


const myObject ={
    name: "Alice",
    age: 30,
    city: "New York"
}

// for(const [key, value] in myObject){
//     console.log(key + " : " + value);
// }

for (const key in myObject){
    console.log('${key} shortct is for ${myObject[key]}');
}

const programming = ["JavaScript", "Python", "Java", "C++"]
    for(const keyq in programming){
        console.log(keyq);
    }    