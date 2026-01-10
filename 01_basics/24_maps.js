const mynumbers = [1,2,3,4,5]

const newNums = mynumbers.map((num) => {return num * 2})
console.log(newNums);


const newNumsShort = mynumbers
.map(num => num * 2)
.map(num => num + 1)
console.log(newNumsShort);