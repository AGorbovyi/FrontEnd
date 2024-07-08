let todoList = [];

const endpoint = 'https://jsonplaceholder.typicode.com/todos';

// const testItemInLocalStorage = localStorage.getItem('toDoItems');
// if (testItemInLocalStorage !== null) {
//     todoList.push({task: testItemInLocalStorage, done: false});    
// }


const asyncFunc = async () => {
    const response = await fetch(endpoint);
    const bodyData = await response.json();
    const newElements = bodyData.map(elem => ({
        task: elem.title,
        done: elem.completed
    })); 
    todoList.push(...newElements);
    core(todoList);
} 



// код Родиона
// async function fetchTodos() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//         const data = await response.json();
//         const limitedData = data.slice(0, 25).map(item => ({
//           task: item.title,
//           done: item.completed
//       })); // Берем только первые 5 задач
//         todoList.push(...limitedData);
//         core(todoList);
//     } catch (error) {
//         console.error('Error fetching todos:', error);
//     }
//   }



function core(arrList) {
    // выводим список объктов массива
    const list = document.querySelector('.list');

    list.innerHTML = ''; // очищаем старый массив

    const createElem = arrList.map(list => {
        const listItem = document.createElement('li');
        listItem.textContent = list.task;
        listItem.classList.add('list-item');
        if (list.done == true) {
            listItem.classList.add('list-item_done');
        }
        // switcher
        listItem.addEventListener('click', () => {
            if (list.done == false) {
                listItem.classList.add('list-item_done');
                list.done = true;
            } else if (list.done == true) {
                listItem.classList.remove('list-item_done');
                list.done = false;
            }
        });
        return listItem;
    });

    createElem.forEach(listItem => {
        list.appendChild(listItem);
    });
};
// core(todoList);
asyncFunc();



// кнопка "Создать"
const btnCreate = document.querySelector('#create');
const inputTask = document.querySelector('.task-input');

const btnClickCreate = (event) => {
    event.preventDefault();
    const textFromInput = inputTask.value;
    todoList.unshift({ task: textFromInput, done: false });
    core(todoList);
    localStorage.setItem('toDoItems', inputTask.value); // сохраняет задачи в памяти ПК local storage
}
btnCreate.addEventListener('click', btnClickCreate);


// Фильтры
const filter = document.querySelector('.status');

// Фильтр "все"
const btnAll = document.querySelector('#all');

const btnClickAll = () => {
    core(todoList);
}
btnAll.addEventListener('click', btnClickAll);


// Фильтр "выполненные"
const btnCompleted = document.querySelector('#completed');

const btnClickCompleted = () => {
    const filterCompleted = todoList.filter(task => task.done == true);
    core(filterCompleted);
}
btnCompleted.addEventListener('click', btnClickCompleted);


// Фильтр "невыполненные"
const btnUnCompleted = document.querySelector('#uncompleted');

const btnClickUCompleted = () => {
    const filterUnCompleted = todoList.filter(task => task.done == false);
    core(filterUnCompleted);
}
btnUnCompleted.addEventListener('click', btnClickUCompleted);
