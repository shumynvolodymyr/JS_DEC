const backBtnDiv = document.createElement('div');
const backBtn = document.createElement('button');
backBtn.innerText = 'BACK';
backBtnDiv.append(backBtn);
backBtn.onclick = () => history.back();

const favoritesUsers = document.createElement('div');
const storage = JSON.parse(localStorage.getItem('users'));

for (const user of storage) {
    const userBox = document.createElement('div');
    const deleteButton = document.createElement('button');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const {name, age, status} = user;

    deleteButton.innerText = 'Delete';
    h2.innerText = name;
    p.innerText = `Age: ${age}. Status: ${status}`;

    userBox.append(h2, p, deleteButton);
    favoritesUsers.append(userBox);

    deleteButton.onclick = () => {
        const filter = storage.filter(u => u.id !== user.id);
        localStorage.setItem('users', JSON.stringify(filter));
        location.reload();
    };
}

document.body.append(backBtnDiv, favoritesUsers);
