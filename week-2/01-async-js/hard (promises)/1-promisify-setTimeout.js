/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const promise1 = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log('promise resolved');
            resolve();
        },n*1000)
    })
    return promise1;
}

module.exports = wait;
