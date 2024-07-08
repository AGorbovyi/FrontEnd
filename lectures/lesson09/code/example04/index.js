const strA = ' Hello, my little Bro! Hello ';

console.log(strA.length);
console.log(strA.toLowerCase());
console.log(strA.toUpperCase());

let substring = strA.substring(4, 9);
console.log(substring);

console.log(strA.replace('Hello', 'Привет'));
console.log(strA.replaceAll('Hello', 'Привет'));

const replaceString = strA.replaceAll('Hello', 'Привет');

console.log(replaceString);
console.log(replaceString.trim());

console.log(strA.split(''));
console.log(replaceString.replace(',', '').replace('!', '').trim().split(' '));



