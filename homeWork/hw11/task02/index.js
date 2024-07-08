/* 
Напишите функцию, которая превратит массив который содержит элементы в виде массивов из двух элементов, 
в объект. Первый элемент каждого внутреннего массива ключ, второй - значение. Например такой:
 */


const array2 = [
    [ 'height', 170 ],
    [ 'weight', 80 ],
    [ 'sport', 'regbi' ],
    [ 'full name', 'John Doe' ],
    [ 'sing', 'love' ],
    [ 'speed', 90 ]
];

function createNewObject(arr) {
    const object2 = {};
    console.log("given array: ");
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        // console.log(arr[i][0]);
        // console.log(arr[i][1]);
        object2[arr[i][0]] = arr[i][1];
    }
    return object2;
}

console.log("created from array object: ");

console.log(createNewObject(array2));