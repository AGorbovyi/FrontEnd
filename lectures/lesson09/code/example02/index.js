// arrays

const arr1 = [1, 4, 98, "abc", null, undefined, [1, 2, 3]];
console.log(arr1);
console.log(arr1[2]);
console.log(arr1[6][2]);

console.log(arr1.length);

// добавляем элемент в конец массива
const newLength = arr1.push(777);
console.log(arr1);
console.log(newLength);

// remove last element from masive
arr1.pop();
console.log(arr1.pop());
console.log(arr1);

// вставить элемент в начало
arr1.unshift("первый");
console.log(arr1);

// удалить первый элемент из массива
arr1.shift();
console.log(arr1);

// вставить элемент куда-то в массиа
const months = ['Jan', 'March', 'April', "Jun"];
months.splice(1, 0, 'Feb');
console.log(months);

// перевернуть массив
console.log(months.reverse());
console.log(months.reverse());


// удалить элемент из массива по индексу
months.splice(1, 1);
console.log(months);


// двумерный массив
const doubleArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(doubleArr[0][2]);
console.log(doubleArr[2][1]);


console.log("============== спред оператор =============");
// спред оператор/ деструктуризация
const arrC = [1, 2, 3];
const arrY = [4, 5, 6];

const arr3 = [...arrC, ...arrY];

console.log(arr3);

console.log("Максимальный элемент массива: ");
console.log(Math.max(...arr3));

let [a, b, c] = [...arrC];
console.log(b);