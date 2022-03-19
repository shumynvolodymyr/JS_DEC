const post = JSON.parse(localStorage.getItem('post'));
const postDiv = document.createElement('div');
const commentCurrentPostBtn = document.createElement('button');
const commentsDiv = document.createElement('div');

commentsDiv.classList.add('comments-box');
postDiv.classList.add('post-box');
commentCurrentPostBtn.innerText = 'comment of current post'

const boxCreator = (post, div) => {
    for (const item in post) {
        const p = document.createElement('p');
        p.innerHTML = `<strong>${item} :</strong> ${post[item]}`;
        p.classList.add(item);
        div.append(p);
        if (typeof post[item] === 'object') {
            p.innerHTML = `<strong>${item} :</strong>`;
            boxCreator(post[item], p);
        }
    }
};

commentCurrentPostBtn.onclick = () => {
    commentsDiv.innerHTML = '';
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
        .then(value => value.json())
        .then(comments => {
            comments.forEach(comment => {
                const commentP = document.createElement('p');
                boxCreator(comment, commentP);
                commentsDiv.append(commentP);
                postDiv.append(commentsDiv);
            })
        })
}

boxCreator(post, postDiv);
postDiv.append(commentCurrentPostBtn);
document.body.append(postDiv);
