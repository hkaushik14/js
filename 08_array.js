//array

const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits); // ['apple', 'banana', 'cherry']
// javascript aarray is resizable and can hold different data types
// array in javasript is copy is shallow copy

console.log(fruits[0]); // 'apple'
console.log(fruits.length); // 3

//deep copy
const moreFruits = [...fruits];
moreFruits.push('date');
console.log(moreFruits);

const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr2); // [1, 2, 3, 4]
myArr2.push(5);
// Array METHODS
console.log(myArr2.pop()); // 5
myArr2.unshift(0); // add to beginning
console.log(myArr2); // [0, 1, 2, 3, 4]

myArr2.shift(); // remove from beginning
console.log(myArr2); // [1, 2, 3, 4]


console.log(myArr2.includes(3)); // true
console.log(myArr2.indexOf(3)); // 2

console.log(myArr2.slice(1, 3)); // [2, 3]
console.log(typeof myArr2); // object

// slice does not modify original array
//slice, splice
console.log(myArr2.splice(1, 2)); // [2, 3]
console.log(myArr2); // [1, 4]

const myn2 = myArr2.splice(0, 1, 'a', 'b', 'c'); // from index 0, remove 1 element, add a,b,c
console.log(myn2); // [1]

