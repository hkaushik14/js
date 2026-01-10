// objects
// singleton object, constructor function, class    

// const tinderUser = new Object();
const tinderUser = {}; // object literal

console.log(tinderUser);
// console.log(typeof tinderUser); // object

tinderUser.id = '123abc';
tinderUser.name = 'Harsh';
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
    email: "harsh@gmail.com",
    fullname: {
        userFirstname: 'Harsh',
        userLastname: 'Kaushik'

    }
};
console.log(regularUser.fullname.userFirstname);

const obj1 = {1: 'a', 2: 'b'};
const obj2 = {3: 'c', 4: 'd'};

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const obj4 = {...obj1, ...obj2};
// console.log(obj4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const user = {
    id: 123,
    email : "harsh@gmail.com"
},
adminUser = {
    id: 456,
    email: "k@gamil.com",
    isAdmin: true
};

console.log(user);
console.log(Object.keys(user)); // [ 'id', 'email' ]
console.log(Object.keys(adminUser)); // [ 'id', 'email', 'isAdmin' ]

console.log(tinderUser.hasOwnProperty('id')); // true

