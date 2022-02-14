// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// const cutString = (str, n) => {
//     let arr = [];
//     for (let i = 0; i < str.length; i += n) {
//         arr.push(str.slice(i, i + n));
//     }
//     return arr;
// }
//
// console.log(cutString('наслаждение', 3));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

const emailValidator = (email) => {
    let splitRavlyk = email.split('@');
    if (splitRavlyk.length > 1 && splitRavlyk[0].length > 2) {
        let split = splitRavlyk[1].split('.');
        if (split.length > 1 && split[0].length > 2) {
            return console.log(`Імейл - ${email} валідний`)
        }
    }
    return console.log(`Імейл - ${email} не валідний`);
}

emailValidator('someemail@gmail.com');
emailValidator('someeMAIL@gmail.com');
emailValidator('someeMAIL@i.ua');
emailValidator('some.email@gmail.com');
emailValidator('ddd@gmailcom');

// - є масив

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// const sort = (arr) => {
//     return arr.sort((a, b) => b.modules.length - a.modules.length);
// }
//
// console.log(sort(coursesArray));

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

// let symb = "о";
// let str = "Астрономия это наука о небесных объектах";
// const count = (str, stringsearch) => {
//     let res = [];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === stringsearch) {
//             res.push(str[i]);
//         }
//     }
//     return res.length;
// }
//
// console.log(count(str, symb));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let str = "Сила тяжести приложена к центру масс тела";
const cutString = (str, n) => {
    return str.split(' ').splice(0, n).join(' ');
}

console.log(cutString(str, 5));
