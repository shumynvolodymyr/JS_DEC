// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

function scrapper(body) {
    let classNameArr = [];
    let children = body.children;
    for (const child of children) {
        if (child.classList) {
            child.classList.forEach(el => {
                if (!classNameArr.includes(el)) {
                    classNameArr.push(el)
                }
            });
        }
        scrapper(child);
    }
    classNameArr.length > 0 ? console.log(classNameArr) : '';
}

scrapper(document.body);
