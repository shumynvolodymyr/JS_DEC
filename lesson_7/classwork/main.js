// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, year, maxSpeed, engineCapacity) {
//     this.model = model;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineCapacity = engineCapacity;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//
//     this.info = function () {
//         console.log(`
//       Model: ${this.model},
//       Year: ${this.year},
//       MAX Speed: ${this.maxSpeed} km/h,
//       Engine Capacity: ${this.engineCapacity} l`);
//     };
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     };
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// let car = new Car('Toyota', 2012, 260, 3.5);
// car.info();
// car.increaseMaxSpeed(25);
// car.changeYear(2013);
// car.addDriver({name: 'Vasya', age: 25});
// car.info()
// console.log(car);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, year, maxSpeed, engineCapacity) {
//         this.model = model;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//
//     info() {
//         console.log(`
//       Model: ${this.model},
//       Year: ${this.year},
//       MAX Speed: ${this.maxSpeed} km/h,
//       Engine Capacity: ${this.engineCapacity} l`);
//     };
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//     };
//
//     changeYear(newValue) {
//         this.year = newValue;
//     };
//
//     addDriver(driver) {
//         this.driver = driver;
//     }
// }
//
// let car = new Car('BMW', 2017, 330, 3.0);
// car.info();
// car.increaseMaxSpeed(25);
// car.changeYear(2019);
// car.addDriver({name: 'Vasya', age: 25});
// car.info()
// console.log(car);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellas = [
    new Cinderella('Anna', 25, 42),
    new Cinderella('Ira', 23, 41),
    new Cinderella('Nina', 24, 39),
    new Cinderella('Dina', 26, 37),
    new Cinderella('Vira', 29, 38),
    new Cinderella('Vika', 31, 39),
    new Cinderella('Lena', 56, 36),
    new Cinderella('Tanya', 45, 43),
    new Cinderella('Nastya', 24, 39),
    new Cinderella('Olya', 28, 38),
];

let prince = new Prince('Gena', 29, 37);

// for (let i = 0; i < cinderellas.length; i++) {
//     const cinderella = cinderellas[i];
//     if (cinderella.age < prince.age && cinderella.footSize === prince.footSize) {
//         console.log(`Твоя принцесса: ${cinderella.name}`);
//     }
// }

const findCinderella = cinderellas.find(cinderella => cinderella.age < prince.age && cinderella.footSize === prince.footSize);
console.log(`Твоя принцесса: ${JSON.stringify(findCinderella)}`);

