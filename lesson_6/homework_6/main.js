// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = ['hello world', 'lorem ipsum', 'javascript is cool'];
// str.forEach(value => console.log(`Довжина: ${value} - ${value.length}`));

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = ['hello world', 'lorem ipsum', 'javascript is cool'];
// str.forEach(value => console.log(value.toUpperCase()));

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str = ['hello world', 'lorem ipsum', 'javascript is cool'];
// str.forEach(value => console.log(value.toLowerCase()));

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// let trim = str.trim();
// console.log(trim);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str = 'Каждый охотник желает знать';
// const stringToArray = (str) => {
//     return str.split(' ');
// };
// console.log(stringToArray(str));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
// const delete_characters = (str, length) => {
//     return str.substring(0, length);
// };
// console.log(delete_characters(str, 7));

//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
// const insert_dash = (str, symb) => {
//     return str.toUpperCase().split(' ').join(symb);
// }
// console.log(insert_dash(str, '-'));

//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let str = "html javascript php";
//
// const lowToUp = (str) => {
//     if (str.charAt(0) === str.charAt(0).toLowerCase()) {
//         return str.charAt(0).toUpperCase() + str.slice(1);
//     }
//     return str;
// }
//
// console.log(lowToUp(str));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let str = "html javascript php";
const capitalize = (str) => {
    let split = str.split(' ');
    return split.map((value) => value.charAt(0).toUpperCase() + value.slice(1)).join(' ');
}

console.log(capitalize(str));
