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

secondPromise.then(promiseFullfilled, promisePejected);

function promiseFullfilled(a) {
    console.log('Success with result ' + a);
}

function promisePejected(a) {
    console.log('Rejected with result ' + a);
}