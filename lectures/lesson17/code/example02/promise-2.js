// promise
const secondPromise = new Promise(
    (resolve, reject) => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve(randomNumber)            
        } else {
            reject(randomNumber)
        }
    }
);

secondPromise
.then(promiseFullfilled)
.catch(promisePejected)
.finally(forFinally)


function promiseFullfilled(a) {
    console.log('Success with result ' + a);
}

function promisePejected(a) {
    console.log('Rejected with result ' + a);
}

function forFinally() {
    console.log('Вот и все закончилось');    
}


// re-write
console.log('================ Re-Write =================');
secondPromise
.then((a) => {
    console.log('Success with result ' + a);
})
.catch((a) => {
    console.log('Rejected with result ' + a);
})
.finally((a) => {
    console.log('Вот и все закончилось'); 
})