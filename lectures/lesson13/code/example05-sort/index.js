// sort

const arrToSort = [2, 11, 3, 5, 9, 4];
console.log('Оригинальный массив: ');
console.log(arrToSort);

console.log('Массив после сортировки: ');
console.log(arrToSort.sort((a, b) => {
    if(a < b) {
        return -1;
    } else {
        return +1;
    }
}));

// альтернативная сортировка:
console.log(arrToSort.sort((a, b) => {
    return a - b;
    // return b - a; // в обратном порядке
}));