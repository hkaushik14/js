// Promise-based asynchronous operations

// promises is ojective that contains methods for working with Promises.
const promiseOne = new Promise(function(resolve, reject) {
    //  an asynchronous operation using setTimeout
    // DB calls, cryptography, network requests, etc.
    setTimeout(function(){
        console.log("Asynchronous operation complete.");
        resolve();
    },1000);
    })

    promiseOne.then(function(){
    console.log("Promise consumed .");
    })

    new Promise(function(resolve, reject) {
    // Simulating an asynchronous operation using setTimeout
    setTimeout(function(){
        console.log("Async task 2 ");
        resolve();
    },1000);
    }).then(function(){
        console.log("Async 2 reolved.");
    })


    const promiseThree = new Promise(function(resolve, reject) {
        setTimeout(function(){
            resolve({username: "Sample Data", email: "harsh@gmail.com"})
        },1500)
        })
        promiseThree.then(function(user){
        console.log("User data received: ", user);
        })

    const promiseFour = new Promise(function(resolve, reject) {
        setTimeout(function(){
            let error = true; // Simulating an error condition
            if(!error){
                resolve({username: "harsh", passward: "123456"});
            } else {
                reject("An error occurred while fetching user data.");
            }
        },1500)
        })

        promiseFour
        .then((user)=>{
        console.log("User data: ", user);
        return user.username;
        })
        .then((username)=>{
        console.log("Username: ", username);
        }).catch((error)=>{
        console.log("Error: ", error);
        }).finally(()=>{
        console.log("Promise operation completed.");
        });


        const promiseFive = new Promise((function(resolve, reject) {
            setTimeout(function(){
                let error = true; // Simulating an error condition
                if(!error){
                    resolve({username: "harsh", passward: "123456"});
                } else {
                    reject("ERROR: JS went wrong");
                }
            },1500)
        }))

        async function consumePromiseFive(){
            try {
                const repsonse = await promiseFive;
                console.log(response);

            } catch (error) {
                console.log("Error: ", error);
            }
        }
        consumePromiseFive();


        // async function getUserData(){
        //     try {
        //         const response = await fetch('https://jsonplaceholder.typicode.com/users');
        //         // console.log("Response from API: ", response);
                
        //         const users = await response.json();
        //         console.log("User data from API: ", users);
        //     } catch (error) {
        //         console.log("Error fetching user data: ", error);

        //     }
        // }
        // getUserData();

        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {

         return response.json()})
            .then((posts) => {
            console.log("Posts data from API: ", posts);
         })
         .catch((error) => {
            console.log("Error fetching posts: ", error);
         })
