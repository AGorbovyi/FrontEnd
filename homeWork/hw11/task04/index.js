/*
Напишите функцию, которая принимает объект и возвращает другой обьект, который содержит все свойства исходного обьетка, 
но значения свойств - это их типы. Пример:
{ a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> { a: 'string', '36.6': 'number', 'John Doe': 'string' }
*/

const anton = {
    firstName: 'Anton',
    lastName: 'Gorbovyi',
    age: 38,
    sex: 'male',
}

const getAnotherObj = (obj) =>{
    const newObj = {};
    const newKey = Object.keys(obj);
    const callBackFunc = (key) => {
        newObj[key] = typeof obj[key];
    }
    newKey.forEach(callBackFunc);
    return newObj;
}

console.log(getAnotherObj(anton));

/*
4*. Напишите функцию, которая принимает объект и возвращает другой более сложный обьект, который содержит все свойства исходного обьетка, 
но значения свойств - это объект содержащий исходное значение, и его тип. Пример:
{ a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> { a: { value: 'a', type: 'string' }, '36.6': { value: 36.6, type: 'number' }, 'John Doe': { value: 'John Doe', type: 'string' } }
*/

