// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// const body = document.body;
// body.onclick = function (e) {
//     console.log(`
//         Назва тегу: ${e.target.nodeName}
//         Список класів: ${e.target.className}
//         Список id: ${e.target.id}
//         Висота*ширина: ${e.target.clientHeight} * ${e.target.clientWidth}
//     `);
// };

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// const blockInfo = (page) => {
//
//     const popup = document.createElement('div');
//     popup.style.border = '1px solid black';
//     popup.style.borderRadius = '20px';
//     popup.style.background = '#e8e8e8';
//     popup.style.boxShadow = '0px 0px 10px #000';
//     popup.style.marginLeft = '40%';
//     popup.style.marginTop = '40%';
//     popup.style.padding = '10px';
//     popup.style.position = 'absolute';
//
//     page.onclick = function (e) {
//         popup.innerHTML = `
//             <h2>Назва тегу: ${e.target.nodeName}</h2>
//             <p>Список класів: ${e.target.className}</p>
//             <p>Список id: ${e.target.id}</p>
//             <p>Висота*ширина: ${e.target.clientHeight} * ${e.target.clientWidth}</p>
//         `;
//         document.body.append(popup);
//     };
//
//     popup.onclick = () => popup.style.display = 'none';
// };
// blockInfo(document.body);

// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

const filterCreator = (users) => {
    const checkboxArr = ['statusFalse', 'yearsOld29', 'cityKyiv'];
    const checkboxForm = document.createElement('form');
    checkboxForm.setAttribute('name', 'checkboxForm');

    for (let i = 0; i < checkboxArr.length; i++) {
        const checkboxLabel = document.createElement('label');
        const input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('id', `${checkboxArr[i]}`);
        input.setAttribute('name', `${checkboxArr[i]}`);
        checkboxLabel.innerText = `${checkboxArr[i]}`;
        checkboxLabel.append(input)
        checkboxForm.append(checkboxLabel);
    }

    document.body.append(checkboxForm);

    const boxCreator = (users) => {
        users.forEach(user => {
            const mainDiv = document.createElement('div');
            mainDiv.style.border = '1px solid black';
            mainDiv.style.margin = '10px';
            mainDiv.style.padding = '10px';
            mainDiv.style.boxShadow = '10px 5px 5px silver';

            const recursiveCreator = (data, div) => {
                for (const value in data) {
                    const userDiv = document.createElement('div');
                    userDiv.classList.add(value);
                    userDiv.append(`${value} : ${data[value]}`);
                    div.append(userDiv);
                    if (typeof data[value] === 'object') {
                        userDiv.innerText = value;
                        recursiveCreator(data[value], userDiv);
                    }
                }
            }
            recursiveCreator(user, mainDiv);

            document.body.append(mainDiv);
        });
    }

    const form = document.forms[0];
    form.addEventListener('change', e => {

        if (form.statusFalse.checked) {
            let filter = users.filter(user => user.status === false);
            boxCreator(filter);
        } else if (form.yearsOld29.checked) {
            let filter = users.filter(user => user.age >= 29);
            boxCreator(filter);
        } else if (form.cityKyiv.checked) {
            let filter = users.filter(user => user.address.city === 'Kyiv');
            boxCreator(filter);
        }
    });
}

filterCreator(usersWithAddress);

// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
