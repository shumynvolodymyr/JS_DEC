// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою

// const s_rectangle = (a, b) => a * b;
//
// console.log(s_rectangle(2, 5));

// - створити функцію яка обчислює та повертає площу кола

// const s_circle = (r) => Math.PI * Math.pow(r, 2);
//
// console.log(s_circle(5));

// - створити функцію яка обчислює та повертає площу циліндру

// const s_cylinder = (h, r) => 2 * Math.PI * r * h;
//
// console.log(s_cylinder(5,2));

// - створити функцію яка приймає масив та виводить кожен його елемент

// const displaysTheItem = (arr) => {
//     for (const element of arr) {
//         document.write(`<h1>${element}</h1>`);
//     }
// }
//
// displaysTheItem(['rap', 'music', 'pop', 'rok', true]);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// const createParagraph = (text) => document.write(`<p>${text}</p>`);
//
// let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda commodi delectus fugiat impedit itaque, iusto maxime optio placeat quaerat?';
// createParagraph(text);

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// const listCreator = (text) => {
//     document.write('<ul>');
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write('</ul>');
// }
//
// listCreator('The Best');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// const listCreator = (text, li_quantity) => {
//     document.write('<ul>');
//     for (let i = 0; i < li_quantity; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write('</ul>');
// }
//
// listCreator('The Best', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// const listCreator = (array) => {
//     document.write('<ul>');
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write('</ul>');
// }
//
// listCreator([1, true, 'fine', 'good']);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let array = [
    {
        id: 1,
        name: 'Ivan',
        age: 30
    },
    {
        id: 2,
        name: 'Nika',
        age: 20
    },
    {
        id: 3,
        name: 'Vira',
        age: 28
    },
    {
        id: 4,
        name: 'Alex',
        age: 18
    },
];

const arrayToDisplay = (arr) => {
    for (const element of arr) {
        document.write(`<div>
            <h1>${element.id}. ${element.name}</h1>
            <h2>Age: ${element.age}</h2>
        </div>`);
    }
}

arrayToDisplay(array);
