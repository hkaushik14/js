let score = undefined


console.log("score is "+ score) //score is 33
console.log("score is "+ String(score)) //score is 33


let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN
//"abc33" => NaN
//true => 1;False => 0
let booleanisLoggedIn = Boolean(isLoggedIn);