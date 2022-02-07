// 1. Створити пустий масив та :

let arr = [];

//     a. заповнити його 50 парними числами за допомоги циклу.

// for (let i = 0; i < 100; i += 2) {
//     arr.push(i);
// }
//
// console.log(arr);

//     b. заповнити його 50 непарними числами за допомоги циклу.

// for (let i = 0; i < 100; i++) {
//     if (i % 2) {
//         arr.push(i);
//     }
// }
//
// console.log(arr);

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// for (let i = 0; i < 20; i++) {
//     let random_number = Math.floor(Math.random() * 100);
//     arr.push(random_number);
// }
//
// console.log(arr);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

for (let i = 0; i < 20; i++) {
    let random_number = Math.floor(Math.random() * (732 - 8) + 8);
    arr.push(random_number);
}

console.log(arr);

// 2. Вивести за допомогою console.log кожен третій елемен

// for (let i = 0; i < arr.length; i+=3) {
//         console.log(arr[i])
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// for (let i = 0; i < arr.length; i += 3) {
//     if (!(arr[i] % 2)) {
//         console.log(arr[i])
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let new_arr = [];
// for (let i = 0; i < arr.length; i += 3) {
//     if (!(arr[i] % 2)) {
//         console.log(arr[i])
//         new_arr.push(arr[i]);
//     }
// }
//
// console.log(new_arr);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let array = [1, 2, 3, 5, 7, 9, 56, 8, 67];
//
// for (let i = 0; i < array.length; i++) {
//     if (!(array[i] % 2)) {
//         console.log(array[i - 1])
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let array = [100, 250, 50, 168, 120, 345, 188];
// let sum = 0;
//
// for (let i = 0; i < array.length; i++) {
//     sum += array[i] / array.length;
// }
//
// console.log(sum);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let array = [];
// let new_arr = [];
//
// for (let i = 0; i < 10; i++) {
//     array.push(Math.round(Math.random() * 20));
// }
//
// for (let i = 0; i < array.length; i++) {
//     new_arr.push(array[i] * 5);
// }
//
// console.log(array);
// console.log(new_arr);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let array= ['one', 2, 'three', 'four', 'five', 'cool', 777, 'true', 13, 'Mercedes-Benz'];
// let new_arr = [];
//
// for (const element of array) {
//     if(typeof element === 'number'){
//         new_arr.push(element);
//     }
// }
//
// console.log(new_arr);

// - Дано 2 масиви з рівною кількістю об'єктів.

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
// Масиви:

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [];

for (let i = 0; i < usersWithId.length; i++) {
    for (let j = 0; j < citiesWithId.length; j++) {
        if (usersWithId[i].id === citiesWithId[j].user_id) {
            usersWithId[i].address = citiesWithId[j];
            usersWithCities.push(usersWithId[i]);
        }
    }
}

console.log(usersWithCities);

//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let num_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// for (const number of num_arr) {
//     if (!(number % 2)) {
//         console.log(number);
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let num_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let new_arr = [];
//
// for (let i = 0; i < num_arr.length; i++) {
//     new_arr.push(num_arr[i]);
// }
//
// console.log(new_arr);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let array = ['a', 'b', 'c'];
// let new_array = [];
//
// for (let i = 0; i < array.length; i++) {
//     new_array += array[i];
// }
//
// console.log(new_array);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let array = ['a', 'b', 'c'];
// let new_array = [];
//
// let i = 0;
// while (i < array.length) {
//     new_array += array[i];
//     i++;
// }
//
// console.log(new_array);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let array = ['a', 'b', 'c'];
let new_array = [];

for (const element of array) {
    new_array += element;
}

console.log(new_array);
