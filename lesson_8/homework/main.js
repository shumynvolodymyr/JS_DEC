// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

// let contentById = document.getElementById('content');
// console.log(contentById);

// -- отримує текст з блоку з id "rules"

// let rulesById = document.getElementById('rules').innerText;
// console.log(rulesById);

// -- замініть текст параграфа з id 'content' на будь-який інший

// let contentById = document.getElementById('content').innerText = 'Other Text!!!';
// console.log(contentById);

// -- замініть текст параграфа з id 'rules' на будь-який інший

// let rulesById = document.getElementById('rules').innerText = 'Other Text!!!';
// console.log(rulesById);

// -- змініть кожному елементу колір фону на червоний

// const allElement = document.body.children;
//
// for (let i = 0; i < allElement.length; i++) {
//     allElement[i].style.background = 'red';
// }

// -- змініть кожному елементу колір тексту на синій

// const allElement = document.body.children;
//
// for (let i = 0; i < allElement.length; i++) {
//     allElement[i].style.color = 'blue';
// }

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

// console.log(document.getElementById('rules').classList);


// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let fcRulesByClassName = document.getElementsByClassName('fc_rules');
for (let i = 0; i < fcRulesByClassName.length; i++) {
    fcRulesByClassName[i].style.color = 'red';

}
