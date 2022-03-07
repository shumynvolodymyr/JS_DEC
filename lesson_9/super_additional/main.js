let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// function userAddress(users) {
//     let arr = [];
//     for (const user of users) {
//         arr.push(user.address);
//     }
//     return arr;
// }
//
// console.log(userAddress(users));

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// function boxCreator(users) {
//     users.forEach(user => {
//         const divElement = document.createElement('div');
//         divElement.classList.add(user.name)
//         const {name, age, status, address: {city, country, street, houseNumber}} = user;
//         divElement.innerHTML = `
//         <h1>${name}. Age: ${age}. Status: ${status}</h1>
//         <p>Address:
//         City: ${city}
//         Country: ${country}
//         Street: ${street}
//         House Number: ${houseNumber}
//         </p>`;
//         document.body.append(divElement);
//     })
// }
//
// boxCreator(users);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// function boxCreator(users) {
//     users.forEach(user => {
//         const mainDiv = document.createElement('div');
//         const nameDiv = document.createElement('div');
//         const ageDiv = document.createElement('div');
//         const statusDiv = document.createElement('div');
//         const addressDiv = document.createElement('div');
//
//         mainDiv.classList.add(user.name)
//
//         const {name, age, status, address: {city, country, street, houseNumber}} = user;
//
//         nameDiv.append(`Name: ${name}`);
//         ageDiv.append(`Age: ${age}`);
//         statusDiv.append(`Status: ${status}`);
//         addressDiv.innerHTML = `
//           <div>Address:</div>
//           <div>City: ${city}</div>
//           <div>Country: ${country}</div>
//           <div>Street: ${street}</div>
//          <div>Hose Number: ${houseNumber}</div>
//          <br>
//         `;
//
//         mainDiv.append(nameDiv, ageDiv, statusDiv, addressDiv);
//         document.body.append(mainDiv);
//     })
// }
//
// boxCreator(users);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// function boxCreator(users) {
//     users.forEach(user => {
//         const mainDiv = document.createElement('div');
//         mainDiv.classList.add(user.name);
//
//         function recursiveCreator(data, div) {
//             for (const value in data) {
//                 const userDiv = document.createElement('div');
//                 userDiv.classList.add(value);
//                 userDiv.append(`${value} : ${data[value]}`);
//                 div.append(userDiv);
//                 if (typeof data[value] === 'object') {
//                     userDiv.innerText = value;
//                     recursiveCreator(data[value], userDiv);
//                 }
//             }
//         }
//         recursiveCreator(user, mainDiv);
//
//         document.body.append(mainDiv);
//     });
// }
//
// boxCreator(users);

//
// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// const content = () => {
//     const allH2Tags = document.getElementsByTagName('h2');
//     const contentTitle = document.getElementsByTagName('h1');
//     const ulTag = document.createElement('ul');
//
//     for (const h2 of allH2Tags) {
//         let liElement = document.createElement('li');
//         liElement.append(h2);
//         ulTag.append(liElement);
//         contentTitle[0].after(ulTag);
//     }
// }
//
// content();

//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

const boxCreator = (arr) => {
    const wrap = document.createElement('div');
    wrap.id = 'wrap'

    for (let i = 0; i < arr.length; i++) {
        const rule = `rule${i + 1}`;
        const rulesDiv = document.createElement('div');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        const {title, body} = arr[i];

        rulesDiv.classList.add('rules', rule);

        wrap.append(rulesDiv);
        rulesDiv.append(h2, p);
        h2.append(title);
        p.append(body);
    }

    document.body.append(wrap);
}

boxCreator(rules);
