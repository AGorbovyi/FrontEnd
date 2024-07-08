// oprators + - * / **

let a = 3;
let b = a**3; // возвидение в степень
console.log(b);

console.log(a < b);

let result = a > b;
console.log(result);

// +
console.log("=========== add ===========");
let str1 = "Hello ";
let str2 = "Mike";
console.log(str1 + str2);

console.log(a + b);

console.log(a + str2);

// 
let str3 = "3";
console.log(typeof a);
console.log(typeof str3);
console.log(str3 + b);

let str4 = str3 + b;
console.log(str4);
console.log(typeof str4);

// Приведение типов
console.log("=========== Приведение типов ===========");

console.log(typeof str3);
let str3a = Number(str3);
console.log(typeof str3a);
console.log(str3a);
console.log(str3 + 3);
console.log(str3a + 3);
console.log(Number(str3) + 3);

let str66 = String(66);
// Приведение типов опять

// к строке
console.log("========== to String =========");
let num1 = 2;
// явно приводим к строке
let strFromNum1 = String(num1);
console.log(String(3));
console.log(String(null));
console.log(String(undefined));
console.log(String(true));

// к числу
console.log("=========== to number ==========");
console.log(Number("3"));
console.log(Number("ab"));
let numberFromString = Number("ab")
console.log(typeof numberFromString);

console.log("========= true, false, null, undefined --> to number ========");
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined)); // NaN Not a Number

console.log("============ especially for number ==========");
let strForPlus = "30";
console.log(+strForPlus);

console.log("============== Examples =============");
console.log(700 + strForPlus);
console.log(700 + Number(strForPlus));
// или тоже самое - переводит текст в 
console.log(700 + +strForPlus);

// к типу boolean
console.log("============== к типу boolean =============");
console.log(Boolean("afjblh")); //true
console.log(Boolean("")); // false
console.log(Boolean(4)); // true
console.log(Boolean(0)); // false
console.log(Boolean(-1)); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false


console.log("============== IF =============");

let num12 = 2;

if (num12) {
    console.log("получилось true в условии");
} else {
    console.log("получился false");
}

if (null) {
    console.log("получилось true в условии");
} else {
    console.log("получился false");
}

if (num12 == 0 || num12 == undefined) {
    console.log("получилось true в условии");
} else {
    console.log("получился false");
}


// Операторы сравнения
console.log("=========== Операторы сравнения (== & ===) ===========")
let t1 = 3;
let t2 = "3";

// Сравнение переменных. Приводит все к одному типу (Number)
console.log(t1 == t2);

// строгое сравнение. Сравнивает в первую очередь тип
console.log(t1 === t2);

console.log(true == 1);

console.log(Number(true) === ("1"));
console.log(true == "1");

console.log("a" === "A");
console.log("a" == "A");
console.log("a" == "1");

// Условный оператор IF
console.log("=========== Условный оператор IF ===========");

if (true) {
    // что-то делаем
} else {
//
}

console.log("=========== Условный оператор SWITCH ===========");

// let day = "Monday";
let day;

switch (day) {
    case "Monday":
      console.log("It's Monday!");
      break;
    case "Tuesday":
      console.log("It's Tuesday!");
   break; // ...
    default:
      console.log("It's another day!");
   }