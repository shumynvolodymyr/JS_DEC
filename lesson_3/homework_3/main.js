// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// const numb = [1, 2, 3, 4, 5];
// const str = ['one', 'two', 'three', 'four', 'five'];
// const arr = ['cool', 777, true, 13, 'Mercedes-Benz'];
//
// for (let i = 0; i < numb.length; i++) {
//     console.log(numb[i]);
// }
//
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr[0] = 'okten';
// arr[1] = true;
// arr[2] = 123;
//
// console.log(arr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write('<div><h2>Довільний текст</h2></div>');
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div><h2>${i}. Довільний текст</h2></div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Довільний текст</h1>`)
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<h1>${i}. Довільний текст.</h1>`)
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// for (const number of arr) {
//     console.log(number);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = ['one', 'two', 'three', 'four', 'five', 'cool', '777', 'true', '13', 'Mercedes-Benz'];
//
// for (const numb of arr) {
//     console.log(numb);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr = [1, 'two', 3, 'four', 'five', 'cool', '777', true, 13, 'Mercedes-Benz'];
//
// for (const numb of arr) {
//     console.log(numb);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arr = [1, 'two', 3, 'four', 'five', 'cool', '777', true, 13, 'Mercedes-Benz'];

// for (const numb of arr) {
//     if (typeof numb === 'boolean') {
//         console.log(numb);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arr = [1, 'two', 3, 'four', 'five', 'cool', '777', true, 13, 'Mercedes-Benz'];

// for (const numb of arr) {
//     if (typeof numb === 'number') {
//         console.log(numb);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arr = [1, 'two', 3, 'four', 'five', 'cool', '777', true, 13, 'Mercedes-Benz'];
//
// for (const numb of arr) {
//     if (typeof numb === 'string') {
//         console.log(numb);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arr = [];
// arr[0] = 'okten';
// arr[1] = true;
// arr[2] = 777;
// arr[4] = 'school';
// arr[5] = 'true';
// arr[6] = 13;
// arr[7] = 'baby';
// arr[8] = false;
// arr[9] = '123';
//
// for (const element of arr) {
//     console.log(element);
// }


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(`${i} <br>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`${i} <br>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(`${i} <br>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//   if (!(i % 2)) {
//         console.log(i);
//         document.write(`${i} <br>`);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2) {
        console.log(i);
        document.write(`${i} <br>`);
    }
}
