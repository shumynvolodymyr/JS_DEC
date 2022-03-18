// Зробити свій розпорядок дня.

//------------------CB------------------------------

// const alarmClock = (hour, cb) => {
//     setTimeout(() => {
//         if (hour < 10) {
//             cb(null, 'Треба почитати новини')
//         } else {
//             cb('Знову проспав день..');
//         }
//     }, 2000);
// }
//
// const bathroom = (hotWater, cb) => {
//     setTimeout(() => {
//         if (!hotWater) {
//             cb('Блін коли включать гарячу воду, йду далі спати...');
//         } else {
//             cb(null, 'Ооо кайф, тепер можна і попити кави')
//         }
//     }, 1000);
// }
//
// const drinkCoffee = (electricity, cb) => {
//     setTimeout(() => {
//         if (electricity) {
//             cb(null, 'Coffee Done:)');
//         } else {
//             cb('There is no work without coffee');
//         }
//     }, 3000);
// }
//
// const watchLecture = (lectureTopic, cb) => {
//     setTimeout(() => {
//         if (lectureTopic === 'cb' || lectureTopic === 'promise') {
//             cb('Ohhh noooooooooo, йду курити!!!')
//         } else {
//             cb(null, 'Все ОК, можна робити ДЗ')
//         }
//     }, 5000)
// }
//
// const homework = (homeworkDone, cb) => {
//     setTimeout(() => {
//         if (homeworkDone) {
//             cb(null, 'Супер, дз зроблено- тепер можна і на пиво))')
//         } else {
//             cb('знов попав(')
//         }
//     }, 2000)
// }
//
// const drinkBeer = (numberDrinksDrunk, cb) => {
//     setTimeout(() => {
//         if (numberDrinksDrunk <= 2) {
//             cb(null, 'Можна йти на вечірню лекцію');
//         } else {
//             cb('Йди проспися алкаш))');
//         }
//     }, 3500)
// }

// alarmClock(8, (err, data) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(data);
//         bathroom(true, (err, data) => {
//             if (err) {
//                 console.error(err)
//             } else {
//                 console.log(data);
//                 drinkCoffee(true, (err, data) => {
//                     if (err) {
//                         console.error(err);
//                     } else {
//                         console.log(data);
//                         watchLecture('Cycles', (err, data) => {
//                             if (err) {
//                                 console.error(err);
//                             } else {
//                                 console.log(data);
//                                 homework(true, (err, data) => {
//                                     if (err) {
//                                         console.error(err);
//                                     } else {
//                                         console.log(data);
//                                         drinkBeer(3, (err, data) => {
//                                             if (err) {
//                                                 console.error(err);
//                                             } else {
//                                                 console.log(data);
//                                             }
//                                         });
//                                     }
//                                 });
//                             }
//                         });
//                     }
//                 });
//             }
//         });
//     }
// });

//----------------Promise-------------------------

const alarmClock = (hour) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (hour < 10) {
                resolve('Йду у кабінет пацана:)')
            } else {
                reject('Знову проспав день..');
            }
        }, 2000);
    })
}

const bathroom = (hotWater) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!hotWater) {
                reject('Блін коли включать гарячу воду, йду далі спати...');
            } else {
                resolve('Ооо кайф, тепер можна і попити кави')
            }
        }, 1000);
    })
}

const drinkCoffee = (electricity) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (electricity) {
                resolve('Coffee Done:)');
            } else {
                reject('There is no work without coffee');
            }
        }, 3000);
    })
}

const watchLecture = (lectureTopic) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (lectureTopic === 'cb' || lectureTopic === 'promise') {
                reject('Ohhh noooooooooo, йду курити!!!')
            } else {
                resolve('Все ОК, можна робити ДЗ')
            }
        }, 5000)
    })
}

const homework = (homeworkDone) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (homeworkDone) {
                resolve('Супер, дз зроблено- тепер можна і на пиво))')
            } else {
                reject('знов попав(')
            }
        }, 2000)
    })
}

const drinkBeer = (numberDrinksDrunk) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (numberDrinksDrunk <= 2) {
                resolve('Можна йти на вечірню лекцію');
            } else {
                reject('Йди проспися алкаш))');
            }
        }, 3500)
    })
}

alarmClock(7)
    .then(value => {
        console.log(value);
        return bathroom(true);
    })
    .then(value => {
        console.log(value);
        return drinkCoffee(true);
    })
    .then(value => {
        console.log(value);
        return watchLecture('cycle');
    })
    .then(value => {
        console.log(value);
        return homework(true);
    })
    .then(value => {
        console.log(value);
        return drinkBeer(1);
    })
    .then(value => console.log(value))
    .catch(reason => console.error(reason));
