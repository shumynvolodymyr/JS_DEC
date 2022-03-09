// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

// const divElement = document.createElement('div');
// const btn = document.createElement('button');
// divElement.id = 'text';
// divElement.style.width = '200px';
// divElement.style.height = '200px';
// divElement.style.background = 'red';
// btn.innerText = 'Hide';
//
// btn.onclick = () => {
//     divElement.hidden ? divElement.hidden = false : divElement.hidden = true;
// }
//
// document.body.append(divElement, btn);

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// const btn = document.createElement('button');
// btn.innerText = 'Hide';
//
// btn.onclick = () => btn.hidden = true;
//
// document.body.append(btn);

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// const form = document.createElement('form');
// const ageInput = document.createElement('input');
// const btn = document.createElement('button');
// ageInput.placeholder = 'age';
// ageInput.type = 'number';
// btn.innerText = 'OK';
//
// btn.onclick = (e) => {
//     e.preventDefault();
//     ageInput.value < 18 ? alert('Ваш вік менше 18') : alert('OK');
// }
//
// form.append(ageInput, btn);
// document.body.append(form);

// - Создайте меню, которое раскрывается/сворачивается при клике

// const header = document.createElement('div');
// const menu = document.createElement('div');
//
// header.style.width = '100%';
// header.style.height = '80px';
// header.style.cursor = 'pointer';
// header.style.background = 'orange';
// menu.style.width = '100%';
// menu.style.height = '300px';
// menu.style.background = 'red';
// menu.hidden = true;
//
// header.onclick = () => menu.hidden ? menu.hidden = false : menu.hidden = true;
//
// document.body.append(header, menu);

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
//

const comments = [
    {
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        title: "qui est esse",
        body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
    },
    {
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
    },
    {
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque"
    },
    {
        title: "dolorem eum magni eos aperiam quia",
        body: "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae"
    }
]

const boxCreator = (comments) => {
    const commentsBox = document.createElement('div');
    for (const comment of comments) {
        const commentBox = document.createElement('div');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');
        const btn = document.createElement('button');
        const {title, body} = comment;

        btn.innerText = 'Hide';
        h1.innerText = title;
        p.innerText = body;
        commentBox.append(h1, p, btn);
        commentsBox.append(commentBox);

        btn.onclick = () => p.hidden ? p.hidden = false : p.hidden=true;
    }
    document.body.append(commentsBox)
}

boxCreator(comments);
