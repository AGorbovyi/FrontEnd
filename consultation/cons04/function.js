// Arrow function
const exampleFunc = (a) => {
    return a * 2;
}

// Function expretion
function arrExample2(a) {

}

// CallBack
const arrExample3 = function(a, exampleFunc) {
    return exampleFunc(a);
}

exampleFunc(4);
console.log(exampleFunc(4));
console.log(arrExample3(2, exampleFunc));


console.log("====================example2====================");

const power = (y) => {
    y = Math.floor(y);
    return y*y;
}

const arrIn = [1, 3, 5, 7];

const changeArray = (arr, callB) => {

    const newArrIn = [];
    for (let i = 0; i < arr.length; i++) {
        newArrIn.push(callB(arr[i]));
    }
    return newArrIn;
}

console.log(changeArray(arrIn, power));