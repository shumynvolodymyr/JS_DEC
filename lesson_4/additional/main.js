// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function concat(...arg) {
//     let res = 0;
//     for (let i = 0; i < arg.length; i++) {
//         res += arg[i];
//     }
//     console.log(res);
// }
//
// concat(5, 'ff');

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]


// function sumArray(arr1, arr2) {
//     let newArr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (i === j) {
//                 newArr.push(arr1[i] + arr2[j]);
//             }
//         }
//     }
//     return newArr;
// }
//
// let array = sumArray([1, 2, 3, 4], [2, 3, 4, 5]);
// console.log(array);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// function returnKey(arr) {
//     let keysOfArr = [];
//     for (const element of arr) {
//         for (const key in element) {
//             keysOfArr.push(key);
//         }
//     }
//     return keysOfArr
// }
//
// let key = returnKey([{name: 'Dima', age: 13}, {model: 'Camry'}]);
// console.log(key);

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function returnValue(arr) {
    let valueOfArr = [];
    for (const element of arr) {
        for (const key in element) {
            valueOfArr.push(element[key]);
        }
    }
    return valueOfArr
}

let key = returnValue([{name: 'Dima', age: 13}, {model: 'Camry'}]);
console.log(key);
