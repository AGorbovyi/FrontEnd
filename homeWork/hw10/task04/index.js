// Задание 4. Простые числа в заданном промежутке
// Нужно создать две функции.
// Первая функция должна принимать число и возвращать результат булевого типа - является ли число простым (Prime number), или нет. Число является простым, если оно делиться без остатка только на 1 и само на себя.
// Вторая функция должна вернуть в виде массива все простые числа в промежутке от 1 до n, где n - первый аргумент функции.
// Вторая функция должна пользоваться первой функцией для определения простых чисел.
// Первая функция не должна быть колбеком, просто рядом лежать, или даже внутри второй функции. На ваш выбор.



// От Антона
// 100/50 = 2, после 50 деление не даст целого числа. Будет всегда остаток. Поэтому функция может в for i считать только до половины от числа 'n'

function checkForPrimeNumber(num) {
    if (typeof num !== 'number' || Number.isNaN(num)) {
      console.log('Not a number');
      return false;
    }
  
    num = Math.floor(num);
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
    num = 2;
    console.log(`Is number ${num} a prime number? => ` + checkForPrimeNumber(num));