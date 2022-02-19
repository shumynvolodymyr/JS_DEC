// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

document.getElementById('main_header').classList = 'December';

// b) робить шириниу елементу ul 400px

document.querySelector('ul').style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%

document.querySelectorAll('.linkList').forEach(element => element.style.width = '50%');

// d) отримує текст який зберігається в елементі з класом listElement2

console.log(document.querySelector('.listElement2').innerText);

// e) отримує всі елементи li та змінює ім колір фону на сірий

document.querySelectorAll('li').forEach(element => element.style.background = 'silver');

// f) отримує всі елементи 'a' та додає їм клас anchor

document.querySelectorAll('a').forEach(el => el.classList = 'anchor');

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

document.querySelectorAll('a').forEach(el => el.innerText === 'link3' ? el.style.fontSize = '40px' : '');

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

document.querySelectorAll('a').forEach(el => el.classList = `element_${el.innerText}`);

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// document.querySelectorAll('.sub-header').forEach(el => el.style.background = prompt('Please enter background color'));

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// document.querySelectorAll('.sub-header').forEach(el => el.innerText = 'content 2 segment' ? el.style.color = prompt('Enter Text color') : '');

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// document.getElementsByClassName('content_1')[0].innerText = prompt('Enter Text');

// l) отримати елементи p та змінити їм padding на 20px

document.querySelectorAll('p').forEach(el => el.style.padding = '20px');

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

document.getElementsByClassName('text2')[0].innerHTML = '<h1>Dec-20221</h1>';
