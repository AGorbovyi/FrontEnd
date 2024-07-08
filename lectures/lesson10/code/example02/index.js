console.log("================== Summ of Numbers ==================");

function sumOfNumbers(a, b) {
    return a + b;
}

console.log(sumOfNumbers(4, 6));


// возведение в степерь
console.log("================== возведение в степерь ==================");

function pow(a, b) {
    return Math.pow(a, b);
}

console.log(pow(2, 3));


// возведение в степерь (2)
console.log("================== возведение в степерь (2) ==================");

function numberx(a) {
    return a ** 2
}
console.log(numberx(3));


// возведение в степерь (3) стрелочная функция
console.log("================== возведение в степерь (3) Arrow function ==================");

const powArrow = (number1, number2) => {
    const powResult = Math.pow(number1, number2);
    return powResult;
}

console.log(powArrow(3, 3));

// short arrow
const powArrow2 = (number1, number2) => Math.pow(number1, number2);
console.log(powArrow2(2, 3));


console.log("================== функция которая использует другие функции ==================");
// функция которая использует другие функции
const makeOperations = (a, b) => {

    function sumOfNumbers(a, b) {
        return a + b;
    }

    console.log('Сумма наших чисел = ' + sumOfNumbers(a, b));
}

makeOperations(7, 3);


// функция которая использует другие функции (2)
const makeOperations2 = (a, b) => {

    console.log('Сумма наших чисел = ' + sumOfNumbers(a, b));
}

makeOperations2(7, 4);


console.log("================== callback функция ==================");
// callback функция

const makeOperationsWithCallBack = (a, b, operation1) => {
    return operation1(a, b);
}

console.log(makeOperationsWithCallBack(5, 3, sumOfNumbers));



console.log("================== Exercise 1 ==================");
// напишем функцию, которая принимает 2 числа, и две колбек функции.
// функция которая возваращает сумму чисел
// функция которая возвращает возведение в степень
// результат выполнения функции:
// Сумма чисел = 
// Число а в степени б =  

// function sumOfNumbers(a, b) {
//     return a + b;
// }

// const powNumberArrow = (num, powN) => Math.pow(num, powN);

// sumOfNumbersArrow function
const sumOfNumbersArrow = (a, b) => a + b;


const mathOperations = (number1, number2, sumOfNumbersArrow, powArrow2) => {
    console.log("Сумма чисел = " + sumOfNumbersArrow(number1, number2));
    console.log("Число 'A' в степени 'B' = " + powArrow2(number1, number2));
}

mathOperations(2, 3, sumOfNumbersArrow, powArrow2);


console.log("================== Exercise 1 example 2 ==================");
// Решение

function sumOfNumbers(a, b) {
    return a + b;
}

const powNumberArrow2 = (num, powN) => Math.pow(num, powN);

const callBackOperation = (a, b, x, y) => {
    console.log(x(a, b));
    console.log(y(a, b));
};

// можно так -
callBackOperation(5, 8, sumOfNumbers, powNumberArrow2);
// а можно так -
callBackOperation(
    5,
    9,
    (l, m) => {
        return l + m;
    },
    (num, powN) => Math.pow(num, powN)
);


console.log("================== Exercise 2 ==================");
// функция принимает как аргумент массив и callback function
// возвращает массив такой же длины, где каждый элемент это результат вызова callback function с аналогичным элементом

const arr = [2, 3, 5];
const callB = (a) => a * 2;

function ArrayOpertion(arr, operation) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(operation(arr[i]));
    }
    return newArr;
}

console.log(ArrayOpertion(arr, callB));
