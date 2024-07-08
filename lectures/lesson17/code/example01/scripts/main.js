// console.log('Script start');
// const result = prompt('Enter your age');
// console.log(`Entered age ${result}`);

// асинхронный код
console.log('Script start');
let result;
const inputElement = document.querySelector('#age');
document.querySelector('#ok-btn'),addEventListener('click', okHandler);

function okHandler() {
    result = inputElement.value;
    console.log(result);
}

console.log(`Last line ${result}`);


//promise
const firstPromise = new Promise(
    //     (resolve) => {
    //         setTimeout(
    //             () => {resolve(true)}, 20000
    //         )
    // }

    (resolve) => {
      document.querySelector('#ok-btn').addEventListener('click', okHandler);
      function okHandler() {
        result = inputElement.value;
        resolve(result);
      }
    }
  );

console.log(firstPromise);

firstPromise.then((ring) => (console.log(ring)));