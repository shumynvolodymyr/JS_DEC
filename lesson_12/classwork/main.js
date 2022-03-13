// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

const getData = (url) => {
    return fetch(url).then(value => value.json());
};

const postsDiv = document.createElement('div');
const commentsDiv = document.createElement('div');
postsDiv.classList.add('posts-box');
commentsDiv.classList.add('comments-box');

getData('https://jsonplaceholder.typicode.com/posts').then(posts => {
    for (const post of posts) {
        const {id, title, body} = post;

        const postDiv = document.createElement('div');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');
        const button = document.createElement('button');

        postDiv.classList.add('post-box');
        button.classList.add('btn');
        h1.innerText = `${id}. ${title}`;
        p.innerText = `Body. ${body}`;
        button.innerText = 'Comments'
        postDiv.append(h1, p, button);
        postsDiv.append(postDiv);

        button.onclick = () => {
            getData(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(comments => {
                commentsDiv.innerHTML = '';
                for (const comment of comments) {
                    const {id, name, email, body} = comment;
                    const commentDiv = document.createElement('div');

                    commentDiv.classList.add('post-comments-box');
                    commentDiv.innerHTML = `
                        <h1>${id}. ${name}</h1>
                        <h3>Email: ${email}</h3>
                        <p>Body: ${body}</p>
                    `;
                    commentsDiv.append(commentDiv);
                }
            })
        }
    }

    document.body.append(postsDiv, commentsDiv);
});
