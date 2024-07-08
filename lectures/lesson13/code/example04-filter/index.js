// filter

const arrForFilter = [1, 2, 4, 6, 7, 9];
console.log('Оригинальный массив: ');
console.log(arrForFilter);

console.log('Массив после фильтра: ');
// console.log(arrForFilter.filter((elem) => {
//     if (elem % 2 === 0) {
//         return true;
//     } else {
//         false;
//     }
// }));


// упрощаем код выше:
console.log(arrForFilter.filter(elem => elem % 2 === 0));
console.log(arrForFilter.filter(elem => elem % 2 !== 0));