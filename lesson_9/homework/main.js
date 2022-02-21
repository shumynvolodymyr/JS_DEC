// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let divElement = document.createElement('div');
// divElement.classList.add('wrap');
// divElement.classList.add('collapse');
// divElement.classList.add('alpha');
// divElement.classList.add('beta');
//
// let divClone = divElement.cloneNode(true);
//
// document.body.append(divElement, divClone);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let arr = ['Main', 'Products', 'About us', 'Contacts'];
//
// function listCreator(arr) {
//     const bodyUL_element = document.body.children[0];
//     for (const element of arr) {
//         const list = document.createElement('li');
//         list.append(element);
//         bodyUL_element.append(list);
//     }
// }
//
// listCreator(arr);

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// function boxCreator(arr) {
//     const divCourses = document.createElement('div');
//     divCourses.classList.add('courses')
//     for (const element of arr) {
//         const {title, monthDuration} = element;
//         const divCourse = document.createElement('div');
//         divCourse.classList.add('course');
//         divCourse.innerHTML = `<h1>${title} - <i>${monthDuration}</i></h1>`;
//         divCourses.appendChild(divCourse)
//     }
//     document.body.appendChild(divCourses);
// }
//
// boxCreator(coursesAndDurationArray);

//
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

function boxCreator(arr) {
    const divCourses = document.createElement('div');
    divCourses.classList.add('courses')
    for (const element of arr) {
        const {title, monthDuration} = element;
        const divCourse = document.createElement('div');
        divCourse.classList.add('item');
        divCourse.innerHTML = `
            <h1 class="heading">${title}</h1>
            <p class="description">${monthDuration}</p>
        `;
        divCourses.appendChild(divCourse)
    }
    document.body.appendChild(divCourses);
}

boxCreator(coursesAndDurationArray);


