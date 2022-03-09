// є масив -
let users = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'kolya', age: 29, status: true},
    {id: 3, name: 'petya', age: 30, status: true},
    {id: 4, name: 'olya', age: 28, status: false},
    {id: 5, name: 'max', age: 30, status: true},
    {id: 6, name: 'anya', age: 31, status: false},
    {id: 7, name: 'oleg', age: 28, status: false},
    {id: 8, name: 'andrey', age: 29, status: true},
    {id: 9, name: 'masha', age: 30, status: true},
    {id: 10, name: 'olya', age: 31, status: false},
    {id: 11, name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

const boxCreator = (users) => {
    const usersBox = document.createElement('div');
    const favoritesBox = document.createElement('div');
    const favoritesBtn = document.createElement('button');
    const parseStorage = JSON.parse(localStorage.getItem('users')) || [];

    usersBox.classList.add('users-box');
    favoritesBox.classList.add('favorites-box');
    favoritesBtn.id = 'favorites-btn';
    favoritesBtn.innerHTML = '<a href="favorites.html">Go to FAVORITES</a>';

    favoritesBox.append(favoritesBtn);
    usersBox.append(favoritesBox);

    for (const user of users) {
        const userBox = document.createElement('div');
        const favoritesButton = document.createElement('button');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        const {name, age, status} = user;

        userBox.classList.add('user-box');
        favoritesButton.id = 'favorites-button';
        favoritesButton.innerText = 'Add to favorites';
        h2.innerText = name;
        p.innerText = `Age: ${age}. Status: ${status}`;

        userBox.append(h2, p, favoritesButton);
        usersBox.append(userBox);

        favoritesButton.onclick = () => {
            const filter = parseStorage.filter(u => u.id === user.id);
            if (filter.length > 0) {
                alert('This user has already been added to the favorites list!')
            } else {
                parseStorage.push(user);
                localStorage.setItem('users', JSON.stringify(parseStorage));
            }
        };
    }
    document.body.append(usersBox);
}

boxCreator(users);
