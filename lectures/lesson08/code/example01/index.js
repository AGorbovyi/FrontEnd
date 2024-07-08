console.log("hello");

let a = "b";
const b = 4;

a = "c";
// a = 4;
// b = 3; - error! 'b' is constanta 

var c = "444"

// 1. string
// 2. number
// 3. boolen
// 4. symbol
// 5. bigInt
// 6. undefind
// 7. null
// 8. Object

let x; // undefind
console.log(x);
console.log(typeof x);

x = null;
console.log(x);
console.log(typeof x);

console.log(typeof a);
console.log(typeof b);

// arrays
const arr1 = [1, 2, 3];

let testA = a;

console.log(a);
console.log(testA);

a = "cc";

console.log(a);
console.log(testA);

const arr2 = arr1;

arr1.push(4);
console.log(arr1);
console.log(arr2);


