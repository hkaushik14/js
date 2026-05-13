const accountId = 12345
let accountEmail = "harshkaushik494@gmail.com"
var accountPassword = "0987"
accountCity = "Roorkee"
let accountstate

// accountId = 54321 // not allowed
accountEmail = "harsh@gmail.com"
accountPassword = "6789"
accountCity = "Dehradun"
console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/
console.log(accountEmail, accountPassword, accountCity, accountstate);
