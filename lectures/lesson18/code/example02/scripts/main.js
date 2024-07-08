console.log('========= Example with function =========');
/* Написать функцию, которая принимает как аргумент endpoint (адрес куда нужно обращаться fetch), 
и вовзращает нам обьект промиса - результат работы fetch */

const endpoint = 'https://api.github.com/users/facebook'

const fetchFunction = (url) => {
    return fetch(url).then((response) => response.json())
}

console.log(fetchFunction(endpoint));

fetchFunction(endpoint).then(data => console.log(data));