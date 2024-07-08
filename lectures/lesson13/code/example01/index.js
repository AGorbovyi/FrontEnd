// array.map

const arr1 = [2, 3, 4]; //[4, 9, 16]

const pow2 = (a) => {
    return a ** 2;
}

console.log(pow2(4));

const arr1Pow = arr1.map(pow2);

// const arr1Pow = arr1.map((a) => {
//     return a**2;
// });

console.log(arr1Pow);

const arr1Plus2 = arr1.map((element) => {
    return element + 2;
});

console.log(arr1Plus2);


const arr1Plus3 = arr1.map((element, index) => {
    return element + index;
});

console.log(arr1Plus3);


console.log("================== Example array.map ==================");

const toBuy = ['молоко', 'пиво', 'вода'];
console.log(toBuy);

const toBuyHTML = toBuy.map(element => `<li>${element}</li>`);
console.log(toBuyHTML);



console.log("================== Example forEach ==================");

toBuy.forEach(elem => {
    console.log(`Надо купить ${elem}`);
});


console.log("================== Example map for two-dimensional array ==================");

const doubleArray = [[1, 2], [10, 20], [100, 200]];
console.log(doubleArray);

const call1 = element => {
    return [element[0] * 2, element[1] * 2];
};
console.log(doubleArray.map(call1));

const call2 = element => element[0] + element[1];
console.log(doubleArray.map(call2));