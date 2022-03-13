// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

const getData = (url) => {
    return fetch(url).then(value => value.json());
};

const usersDiv = document.createElement('div');
usersDiv.classList.add('users-box');

getData('https://jsonplaceholder.typicode.com/users').then(users => {
    for (const user of users) {
        const {id, name, username, email, address, phone, company} = user;
        const userDiv = document.createElement('div');
        const h1 = document.createElement('h1');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const button = document.createElement('button');

        userDiv.classList.add('user-box');
        h1.innerText = `${id}. ${name} ${username}`;
        h3.innerText = `
            Email: ${email}
            Phone: ${phone}
        `;
        p.innerText = `
            Address:
            ${JSON.stringify(address)}
            Company:
            ${JSON.stringify(company)}
        `;
        button.innerText = 'Posts'

        userDiv.append(h1, h3, p, button);
        usersDiv.append(userDiv);

        button.onclick = () => {
            getData(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then(posts => {
                const postsDiv = document.createElement('div');
                postsDiv.classList.add('posts-box');
                for (const post of posts) {
                    const {id, title, body} = post;
                    const postDiv = document.createElement('div');
                    const h1 = document.createElement('h1');
                    const p = document.createElement('p');
                    const button = document.createElement('button');

                    postDiv.classList.add('post-box');
                    h1.innerText = `${id}. ${title}`;
                    p.innerText = `Body: <i>${body}</i>`;
                    button.innerText = 'Comments';

                    postDiv.append(h1, p, button);
                    postsDiv.append(postDiv);

                    button.onclick = () => {
                        getData(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(comments => {
                            const commentsDiv = document.createElement('div');
                            commentsDiv.classList.add('posts-box');
                            for (const comment of comments) {
                                const {id, name, email, body} = comment;
                                const commentDiv = document.createElement('div');
                                const h1 = document.createElement('h1');
                                const p = document.createElement('p');

                                commentDiv.classList.add('post-box');
                                h1.innerText = `${id}. ${name}`;
                                p.innerText = `
                                    Email: ${email}
                                    Body: <i>${body}</i>
                                `;

                                commentDiv.append(h1, p);
                                commentsDiv.append(commentDiv);
                            }
                            postDiv.append(commentsDiv);
                        });
                    }
                }
                userDiv.append(postsDiv);
            });
        }
    }
    document.body.append(usersDiv);
});
