const toBuy = ['молоко', 'пиво', 'вода'];

const toBuyHTMLforVanillaJS = toBuy.map(element => {
    const listItem = document.createElement('li');
    listItem.textContent = element;
    return listItem;
});

const ulElement = document.querySelector('#list');

toBuyHTMLforVanillaJS.forEach(
    element => {
        ulElement.append(element);
    }
);

// ulElement.append(...toBuyHTMLforVanillaJS); // альтернативный вариант


/* ============================= Task 2 ============================= */

const links = [
    { text: 'Home', href: 'https://www.example.com' },
    { text: 'About', href: 'https://www.example.com/about' },
    { text: 'Contact', href: 'https://www.example.com/contact' }
];

// нужен массив Nodes, пример единичной Node:
// <a href="https://wwww.example.com">Home</a>

// вариант 1
// const nodes = links.map(element => {
//     return `<a href=${elem.href}>${elem.text}</a>`
// });

// вариант 2
const container = document.getElementById('links');
const linkElements = links.map(link => {
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    return a;
});
linkElements.forEach(a => {
    container.appendChild(a);
    container.appendChild(document.createElement('br'));
});