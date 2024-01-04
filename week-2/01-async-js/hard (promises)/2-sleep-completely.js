/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

async function sleep(milliseconds) {
    
    const promise1 = new Promise((resolve, reject) =>{
        const startTime = Date.now();
        while(Date.now()-startTime < milliseconds){
            
        }
        resolve();
    })
    return promise1;
    
    
}

module.exports = sleep;
