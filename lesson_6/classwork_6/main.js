// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
// const validator = (dataToValidate) => {
//     return dataToValidate.replace(/[ _.-]+/g, ' ')
// }
//
// console.log(validator(n1))
// console.log(validator(n2))
// console.log(validator(n3))

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// const numberGenerator = (arrayLength, limit) => {
//     let arr = [];
//     for (let i = 0; i < arrayLength; i++) {
//         let numb = Math.floor(Math.random() * limit);
//         arr.push(numb);
//     }
//     return arr;
// }
//
// console.log(numberGenerator(10, 100));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// const numberGenerator = (arrayLength, limit) => {
//     let arr = [];
//     for (let i = 0; i < arrayLength; i++) {
//         let numb = Math.floor(Math.random() * limit);
//         arr.push(numb);
//     }
//     return arr.sort((a, b) => a - b);
// }
//
// console.log(numberGenerator(10, 100));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// const numberGenerator = (arrayLength, limit) => {
//     let arr = [];
//     for (let i = 0; i < arrayLength; i++) {
//         let numb = Math.floor(Math.random() * limit);
//         arr.push(numb);
//     }
//     return arr.filter(value => value % 2 === 0);
// }
//
// console.log(numberGenerator(10, 100));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// const numberGenerator = (arrayLength, limit) => {
//     let arr = [];
//     for (let i = 0; i < arrayLength; i++) {
//         let numb = Math.floor(Math.random() * limit);
//         arr.push(numb);
//     }
//     return arr.map(value => `${value}`);
// }
//
// console.log(numberGenerator(10, 100));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// const sortNums = (arr, direction) => {
//     if (direction === 'ascending') {
//         return arr.sort((a, b) => a - b);
//     }
//     if (direction === 'descending') {
//         return arr.sort((a, b) => b - a);
//     }
//     return arr;
// }
//
// let nums = [11, 21, 3];
// console.log(sortNums(nums, 'ascending'));

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

// const sortFunc = (arr) => {
//     return arr.sort((a, b) => a.monthDuration - b.monthDuration);
// }
//
// console.log(sortFunc(coursesAndDurationArray));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

const filterFunc = (arr, monthDuration) => {
    return arr.filter(value => value.monthDuration > monthDuration);
}

console.log(filterFunc(coursesAndDurationArray, 5));
