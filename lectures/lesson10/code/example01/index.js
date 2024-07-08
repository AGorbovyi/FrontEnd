// funnctions
// 1. Function declaration
console.log("================== Function declaration ==================");

const resultFunctionPrintHello = printHello();
console.log(resultFunctionPrintHello);

function printHello(name = 'Patrik') {
    // console.log('Hello ' + name);
    const fullString = 'Hello ' + name;
    return fullString;
}


// 2. Function expression
console.log("================== Function expression ==================");

const printHelloAlternative = function(name = 'Patrik') {
    const fullString = 'Hello ' + name;
    return fullString;
}

const resultFunctionPrintHelloAlter = printHelloAlternative();
console.log(resultFunctionPrintHelloAlter);


// 3. Arrow functions
console.log("================== Arrow functions ==================");

const printHelloArrow = (name) => {
    const fullString = 'Hello ' + name;
    return fullString;
}

const nameJ = "John";
const resultFunctionPrintHelloArrow = printHelloArrow(nameJ);
console.log(resultFunctionPrintHelloArrow);


// сокращение стрелочной функции
const printHelloArrowShort1 = (name) => {
    return 'Hello ' + name;
}

// или 
const printHelloArrowShort2 = name => 'Hello ' + name;
