// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

// const forms = document.forms[0];
//
// forms.button.onclick = () => {
//     const data = {name: forms.name.value, age: forms.age.value};
//     localStorage.setItem('data', JSON.stringify(data));
// }

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

const forms = document.forms[1];
const key = 'cars'
const parse = JSON.parse(localStorage.getItem(key)) || [];

forms.button.onclick = () => {
    const car = {
        model: forms.model.value,
        type: forms.type.value,
        volume: forms.volume.value,
    };
    parse.push(car);
    localStorage.setItem(key, JSON.stringify(parse));
};
