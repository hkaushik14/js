//Immediately Invoked Function Expression (IIFE)\

(function chai(){
    console.log("Hello from chai function");
})()

(() => {
    console.log("Hello from arrow function");
})();

(() => {
    const username = "john_doe"
    console.log("Welcome " + username);
})();