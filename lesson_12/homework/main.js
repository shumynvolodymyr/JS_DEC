// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

const getData = (url) => {
    return fetch(url)
        .then(value => value.json())
}

// getData('https://jsonplaceholder.typicode.com/posts').then(posts => {
//     const postsDiv = document.createElement('div');
//
//     postsDiv.innerHTML='<h1 class="posts-header">Posts</h1>'
//     postsDiv.classList.add('posts-box')
//
//     for (const post of posts) {
//         const {id, title, body} = post;
//         const postDiv = document.createElement('div');
//
//         postDiv.classList.add('post-box')
//         postDiv.innerHTML = `
//         <h1>${id}. ${title}</h1>
//         <p>${body}</p>
//         `;
//         postsDiv.append(postDiv);
//     }
//     document.body.append(postsDiv);
// });

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

getData('https://jsonplaceholder.typicode.com/comments').then(comments => {
    const commentsDiv = document.createElement('div');

    commentsDiv.innerHTML = '<h1 class="comments-header">Comments</h1>'
    commentsDiv.classList.add('comments-box')

    for (const comment of comments) {
        const {id, name, email, body} = comment;
        const commentDiv = document.createElement('div');

        commentDiv.innerHTML = `<h1>${id}. ${name}</h1>
            <h2>Email: ${email}</h2>
            <p>Body: <i>${body}</i></p>
        `;
        commentDiv.classList.add('comment-box')
        commentsDiv.append(commentDiv);
    }

    document.body.append(commentsDiv);
});
