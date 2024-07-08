// loops (циклы)

console.log("============== for ============")
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log("============== while ============")
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}




console.log("============== Exercise 1 ============")
const arr1 = [1, 4, 98, "abc", null, undefined, [1, 2, 3]];
console.log(arr1);

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}


console.log("============== Exercise 2 ============");
// создать пустой массив, заполнить случайными числами (Math.random()), 5 элементов (в цикле)

const arrWithRandoms = [];
console.log(arrWithRandoms);

for (i = 0; i < 5; i++) {
    const newElement = arrWithRandoms.push(Math.round(Math.random() * 10));
}
console.log(arrWithRandoms);


console.log("============== Exercise 3 ============");
// задача про четверть часа

// if и math

let minutes = 27;
firstQuarter = 15;
secondQuarter = 30;
thirdQuarter = 45;
fourthQuarter = 60;
if (minutes <= firstQuarter) {
    console.log("первая четверть");
} else if (minutes > firstQuarter && minutes <= secondQuarter) {
    console.log("вторая четверть");
} else if (minutes > secondQuarter && minutes >= thirdQuarter) {
    console.log("третья четверть");
} else {
    console.log("четвертая четверть");
}

console.log("============== Exercise 3 (2) ============");
let minutes2 = 27;
console.log(Math.ceil(minutes2 / 15) + " четверть");


console.log("============== Exercise 3 (3) ============");
let minutes1 = 27;
let quarter1 = Math.floor(minutes / 15) + 1;
console.log(`The minute ${minutes1} is in the ${quarter1} quarter of the hour.`);


console.log("============== Exercise 3 (4) ============");

console.log('The minute ' + minutes1 + ' is in the ' + quarter1 + ' quarter of the hour.');