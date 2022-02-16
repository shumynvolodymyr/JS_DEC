// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)

let userArr = [];
for (let i = 10; i >= 1; i--) {
    userArr.push(new User(`${i}`, `name-${i}`, `surname-${i}`, `gmail-${i}`, `09610199${i}`))
}
console.log(userArr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(userArr.filter(value => value.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(userArr.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

let clientArr = [
        new Client(1, 'Vasya1', 'Pupkin', 'okten@gmail.com', 555 - 333 - 111, ['Яблоко', 'Апельсин', 'Груша', 'Молоко']),
        new Client(2, 'Vasya2', 'Pupkin2', 'okten2@gmail.com', 555 - 333 - 112, ['Молоко', 'Апельсин', 'Пиво']),
        new Client(3, 'Vasya3', 'Pupki3', 'okte3@gmail.com', 555 - 333 - 113, ['Сік', 'Кава', 'Ананас']),
        new Client(4, 'Vasya4', 'Pupki4', 'okte4@gmail.com', 555 - 333 - 114, ['Яблоко', 'Ківі']),
        new Client(5, 'Vasya5', 'Pupki5', 'okte5@gmail.com', 555 - 333 - 115, ['Груша']),
        new Client(6, 'Vasya6', 'Pupki6', 'okte6@gmail.com', 555 - 333 - 116, ['Яблоко', 'Апельсин', 'Груша', 'Sprite', 'Cola']),
        new Client(7, 'Vasya7', 'Pupki7', 'okte7@gmail.com', 555 - 333 - 117, ['Яблоко', 'Груша']),
        new Client(8, 'Vasya8', 'Pupki8', 'okt8n@gmail.com', 555 - 333 - 118, ['Яблоко', 'Апельсин', 'Груша', 'Chips']),
        new Client(9, 'Vasya9', 'Pupki9', 'okte9@gmail.com', 555 - 333 - 119, ['Яблоко', 'Апельсин', 'Груша']),
        new Client(10, 'Vasya10', 'Pupkin10', 'okten10@gmail.com', 555 - 333 - 110, ['Яблоко', 'Апельсин', 'Груша', 'Pechenko', 'Snikers']),
    ]
;

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clientArr.sort((a, b) => a.order.length - b.order.length));


