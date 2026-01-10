let a = 10
const b = 20
var  c =30
if (true){
    let a = 40
    const b = 50
    var c = 60
    // console.log("INNER a", a);
    
}
// console.log(a);
// console.log(b);
// console.log(c); 

function one(){
    const username = "john"
    function two(){
        const website = "example.com"
        console.log(username);
    }
    // console.log(website);

    two()
}
// one()


if(true){
    const username = "alice"
    if(username==="alice"){
        const website = "example.org"
        // console.log(username + website);
    }
}


//+++++++++++++++++++++++++++interesting example+++++++++++++++++++++++++++++++

console.log(addone(5));
function addone(num){
    return num + 1

}

addtwo(5)
const addtwo = function(num){
    return num + 2
}