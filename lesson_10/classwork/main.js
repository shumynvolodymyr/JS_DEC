// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// const forms = document.forms;
// const btn = document.getElementById('btn');
//
// btn.onclick = () => {
//     for (const form of forms) {
//         for (const element of form) {
//             console.log(`${element.name}: ${element.value}`);
//         }
//     }
// }

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

// const tableCreator = document.forms.tableCreator;
// const tableBox = document.createElement('table');
//
// tableCreator.submit.onclick = (e) => {
//     e.preventDefault();
//     for (let i = 0; i < tableCreator.tr.value; i++) {
//         const trTag = document.createElement('tr');
//         tableBox.append(trTag);
//         for (let i = 0; i < tableCreator.td.value; i++) {
//             const tdTag = document.createElement('td');
//             tdTag.innerText = tableCreator.content.value;
//             trTag.append(tdTag);
//         }
//     }
// }
//
// document.body.append(tableBox);


// (Додатковачастина для завдання)
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

const badWords = ['putin', 'russia', 'skabeeva'];

const validator = (badWords) => {
    const wordsForm = document.forms.wordsValidator;

    wordsForm.submit.onclick = (e) => {
        e.preventDefault();
        const enteredWords = wordsForm.words.value.split(' ');
        const forbiddenWords = [];

        for (const badWord of badWords) {
            for (const word of enteredWords) {
                if (badWord === word) {
                    forbiddenWords.push(word);
                }
            }
        }
        forbiddenWords.length > 0 ? alert(`This word is forbidden: ${forbiddenWords}`) : console.log('OK');
    }
}
validator(badWords);

