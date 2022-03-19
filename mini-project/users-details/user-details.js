const user = JSON.parse(localStorage.getItem('user'));
const userDiv = document.createElement('div');
const postOfCurrentBtn = document.createElement('button');
const postsDiv = document.createElement('div');

postsDiv.classList.add('posts-box');
userDiv.classList.add('user-box');
postOfCurrentBtn.innerText = 'post of current user';
postOfCurrentBtn.classList.add('postBtn');

const boxCreator = (user, div) => {
    for (const item in user) {
        const p = document.createElement('p');
        p.innerHTML = `<strong>${item}</strong>: ${user[item]}`;
        p.classList.add(item);
        div.append(p);
        if (typeof user[item] === 'object') {
            p.innerHTML = `<strong>${item} :</strong>`;
            boxCreator(user[item], p);
        }
    }
};

postOfCurrentBtn.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(value => {
            value.forEach(post => {
                const postTitle = document.createElement('p');
                const postDetailsBtn = document.createElement('button');

                postTitle.classList.add('post-box');
                postTitle.innerText = post.title;
                postDetailsBtn.innerHTML = '<a href="../post-details/post-details.html">Post Details</a>';

                postDetailsBtn.onclick = () => {
                    localStorage.setItem('post', JSON.stringify(post));
                }

                postTitle.append(postDetailsBtn);
                postsDiv.append(postTitle);
                userDiv.append(postsDiv);
            })
        })
}

boxCreator(user, userDiv);
userDiv.append(postOfCurrentBtn);
document.body.append(userDiv);
