//creating our own promises(we wont usually create promises but it is good to understand)

//resolve -resolution of promise and reject-rejeciton of promise
// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random();
//         setTimeout(() => {
//             if (rand < 0.7)
//                 resolve("Your fake data here form " + url);
//             reject("Request Error!");
//         }, 1000);
//     })
// }

// fakeRequest("/dogs1").then((data) => {
//     console.log(data);
//     console.log("Done with Request");
// }).catch((err) => {
//     console.log("Oh NO!", err)
// })

//async and await
//async functions=>cleaner syntax for working with asnc code!

// async function sayHello() {
//     console.log("Hello");
//     throw "Data base connection failed"
//     return "Dileep"
// }
// sayHello().then((data) => {
//     console.log("Promise resolved with ", data)
// }
// ).catch((err) => {
//     console.log("Promise rejected ", err)
// })



//await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncFunction() {
    console.log('Start');
    await delay(2000); // Wait for 2 seconds
    console.log('After 2 seconds');
}

asyncFunction();








