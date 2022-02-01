// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 100));
}

let result = 0;
for (let i = 0; i < arr.length; i++) {
    result += arr[i];
}

console.log(arr);
console.log(`Sum = ${result}`);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

// let book = {
//     name: 'Harry Potter',
//     pages: 355,
//     genre: 'fantasy'
// };

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

let book = {
    name: 'Harry Potter',
    pages: 355,
    genre: 'Fantasy',
    authors: 'Anonymous'
}

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let books = [
    {
        id: 1,
        name: 'Harry Potter',
        pages: 355,
        genre: 'Fantasy',
        authors: 'Anonymous'
    },
    {
        id: 2,
        name: 'JS',
        pages: 505,
        genre: 'Mystic',
        authors: 'Anonymous'
    },
    {
        id: 3,
        name: 'Node JS',
        pages: 99999,
        genre: 'Fantasy',
        authors: 'Anonymous'
    }
]
// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

// let h = 23;
// let w = 10;
// let s = h * w;
// console.log(s);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

let heightC = 10;
let dC = 4;
let v = Math.PI * dC * heightC;
console.log(v);


// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Знайдіть гіпотенузу k за теоремою Піфагора (число, ступінь) або оператор зведення в ступінь **).

let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
console.log(k);
