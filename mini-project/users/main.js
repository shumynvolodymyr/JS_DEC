const usersURL = 'https://jsonplaceholder.typicode.com/users';
const usersDiv = document.createElement('div');

usersDiv.classList.add('users-box');

const getUsers = (url) => {
    fetch(url)
        .then(value => value.json())
        .then(users => {
            users.forEach(user => {
                const {id, name} = user;
                const userDiv = document.createElement('div');
                const userTitle = document.createElement('h1');
                const userDetailsBtn = document.createElement('button');

                userDiv.classList.add('user-box');
                userDetailsBtn.classList.add('user-details-btn');
                userTitle.innerText = `${id}. ${name}`;
                userDetailsBtn.innerHTML = '<a href="../users-details/user-details.html">User Details</a>';

                userDetailsBtn.onclick = () => {
                    localStorage.setItem('user', JSON.stringify(user));
                };

                userDiv.append(userTitle, userDetailsBtn);
                usersDiv.append(userDiv);
            })
            document.body.append(usersDiv);
        });
}

getUsers(usersURL);
