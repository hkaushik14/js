let myDate = new Date()
console.log(myDate.toString()); // current date and time

console.log(myDate.toDateString()); // current date
console.log(myDate.toTimeString()); // current time
console.log(myDate.toLocaleString()); 


let myCreatedDate = new Date(2023, 0, 23, 10, 33, 30, 0)
console.log(myCreatedDate.toString());

let myCreatedDate2 = new Date("2023-01-23T10:33:30Z")
console.log(myCreatedDate2.toString());

console.log(Math.floor(Date.now()/1000)); // seconds since epoch time


let myCreatedDate3 = new Date()
console.log(myCreatedDate3.getFullYear());
console.log(myCreatedDate3.getMonth());

// newDate.toLocaleString('default', { weekday: 'long', 
//     year: 'numeric', month: 'long', day: 'numeric'
//  }) // January