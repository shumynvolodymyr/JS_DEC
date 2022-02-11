// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// const minNumber = (a, b, c)=> {
//     let minNumber = a;
//     if (b < a && b < c) {
//         minNumber = b;
//     }
//     if (c < b && c < a) {
//         minNumber = c;
//     }
//     console.log(`Min number: ${minNumber}`);
// }
//
// minNumber(5, 4, 3);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// const maxNumber = (a, b, c) => {
//     let maxNumber = a;
//     if (b > a && b > c) {
//         maxNumber = b;
//     }
//     if (c > b && c > a) {
//         maxNumber = c;
//     }
//     console.log(`Min number: ${maxNumber}`);
// }
//
// maxNumber(5, 14, 33);

// - створити функцію яка повертає найбільше число з масиву

// const maxNumOfArray = (array) => {
//     let maxNum = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > maxNum) {
//             maxNum = array[i];
//         }
//     }
//     return maxNum;
// }
//
// let arr = maxNumOfArray([100, 5, 2, 6, 80, 77, 130]);
// console.log(arr);

// - створити функцію яка повертає найменьше число з масиву

// const minNumOfArray = (array) => {
//     let minNum = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] < minNum) {
//             minNum = array[i];
//         }
//     }
//     return minNum;
// }
//
// let arr = minNumOfArray([1, 5, 2, 6, 80, 77, 0]);
// console.log(arr);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// const sum = (array) => {
//     let res = 0;
//     for (let i = 0; i < array.length; i++) {
//         res += array[i];
//     }
//     return res;
// }
//
// let arr = sum([1,2,10]);
// console.log(arr);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// const arithmeticMean = (array) => {
//     let res = 0;
//     for (let i = 0; i < array.length; i++) {
//         res += array[i];
//     }
//     return res/array.length;
// }
//
// let arr = arithmeticMean([6,2,10]);
// console.log(arr);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// const sorter = (...number) => {
//     let minNum = number[0];
//     let maxNum = number[0];
//     for (let i = 0; i < number.length; i++) {
//         if (number[i] > maxNum) {
//             maxNum = number[i];
//         }
//         if (number[i] < minNum) {
//             minNum = number[i];
//         }
//     }
//     console.log(`Max number: ${maxNum}`);
//     return minNum;
// }
//
// let number = sorter(10, 50, 2, 8, 10, 3);
// console.log(`Min number: ${number}`);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// const fillsRandomNumbers = (numberOfNumbers) => {
//     let arr = [];
//     for (let i = 0; i < numberOfNumbers; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     console.log(arr);
// }
//
// fillsRandomNumbers(8);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// const fillsRandomNumbers = (numberOfNumbers, limit) => {
//     let arr = [];
//     for (let i = 0; i < numberOfNumbers; i++) {
//         arr.push(Math.round(Math.random() * limit));
//     }
//     console.log(arr);
// }
//
// fillsRandomNumbers(5, 20);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

const reverse = (arr) => {
    let r_array = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        r_array.push(arr[i]);
    }
    return r_array;
}

let test = reverse([1, 2, 3]);
console.log(test);
