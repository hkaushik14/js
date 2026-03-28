const array1 = [1, 2, 3, 4];

const sum = array1.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 10
// const mytotal = array1.reduce(function(acc, currentValue){
//     console.log('Acc: ${acc} and currval: ${currentValue}');
//     return acc + currentValue;
// }, 0)

// console.log(mytotal);



