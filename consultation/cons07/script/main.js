const func01 = async () => {
    console.log('Вывод перед фетчем');
    // функция должна вернуть промис
    const fetchRes = await fetch('https://jsonplaceholder.typicode.com/todos');
    console.log(fetchRes);
    return fetchRes;
}
// func01();
const ResultOfFunc01 = func01(); // результат выполнения асинхронной функции = промис
ResultOfFunc01.then((res) => console.log(res)); //соответственно работаем с ним как с промисом

console.log('Синхронный код');


const nextAsyncFunction = async(anyPromise) => {
    const resultOfAnyPromise = await anyPromise;
    console.log(resultOfAnyPromise);
}

// nextAsyncFunction(ResultOfFunc01);

// продолжение, новый промис
const newPromise = fetch('https://jsonplaceholder.typicode.com/users');

// variant 1
nextAsyncFunction(newPromise);

// variant 2
newPromise.then((r) => console.log(r));