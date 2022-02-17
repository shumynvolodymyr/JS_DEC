// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

class User {
    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = new Address(street, suite, city, zipcode, lat, lng);
        this.street = street;
        this.phone = phone;
        this.website = website;
        this.company = new Company(companyName, catchPhrase, bs);
    }
}

class Address {
    constructor(street, suite, city, zipcode, lat, lng) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = new Geo(lat, lng);
    }
}

class Geo {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}

class Company {
    constructor(name, catchPhrase, bs) {
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }
}

let user = new User(1,
    'Leanne Graham',
    'Bret',
    'Sincere@april.biz',
    'Kulas Light',
    'Apt. 556',
    'Gwenborough',
    '92998-3874',
    '-37.3159',
    '81.1496',
    '1-770-736-8031 x56442',
    'hildegard.org',
    'Romaguera-Crona',
    'Multi-layered client-server neural-net',
    'harness real-time e-markets');

console.log(user);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

class TagDescription {
    constructor(titleOfTag, action, titleOfAttr, actionOfAttr, titleOfAttr2, actionOfAttr2) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = titleOfAttr2 ? [new Attrs(titleOfAttr, actionOfAttr), new Attrs(titleOfAttr2, actionOfAttr2)] : [new Attrs(titleOfAttr, actionOfAttr)];
    }
}

class Attrs {
    constructor(titleOfAttr, actionOfAttr) {
        this.titleOfAttr = titleOfAttr;
        this.actionOfAttr = actionOfAttr;
    }
}

let a = new TagDescription(
    'a',
    'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
    'accesskey',
    'Активация ссылки с помощью комбинации клавиш.'
);

let div = new TagDescription(
    'div',
    'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
    'align',
    'Задает выравнивание содержимого тега <div>.',
    'title',
    'Добавляет всплывающую подсказку к содержимому.'
);

let h1 = new TagDescription(
    'h1',
    'TML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.',
    'align',
    'Задает выравнивание содержимого тега <div>.',
);

let span = new TagDescription(
    'span',
    'Тег <span> предназначен для определения строчных элементов документа.',
    'hidden',
    'Скрывает содержимое элемента от просмотра.',
    'lang',
    'Браузер использует значение параметра для правильного отображения некоторых национальных символов.'
);

let input = new TagDescription(
    'input',
    'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
    'type',
    'Сообщает браузеру, к какому типу относится элемент формы.',
    'value',
    'Значение элемента.'
);

let form = new TagDescription(
    'form',
    'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.',
    'accept-charset',
    'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.',
    'target',
    'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.'
);

let option = new TagDescription(
    'option',
    'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. ',
    'disabled',
    'Заблокировать для доступа элемент списка.',
    'label',
    'Указание метки пункта списка.'
);

let select = new TagDescription(
    'select',
    'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. ',
    'multiple',
    'Позволяет одновременно выбирать сразу несколько элементов списка.'
);

console.log(a, div, h1, span, input, form, option, select);
