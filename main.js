const add = document.querySelector('#add');
const sort = document.querySelector('.todo-btn-sort');
const list = document.querySelector('#list');
let sorted = false;

function addListItem(text, list) {
    const li = document.createElement('li');
    li.classList.add('todo-list-item');
    const span = document.createElement('span');
    span.innerText = text;

    const del = document.createElement('button');
    del.classList.add('todo-list-item-btn');
    del.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    });

    li.append(span, del);
    list.append(li);
}

add.addEventListener('click', () => {
    const item = document.querySelector('.todo-list-item-text')
    const info = item.value;
    addListItem(info, list);
    item.value = '';
});

sort.addEventListener('click', (e) => {
    const arr = new Array ();
    const siyahi = document.querySelectorAll('li');
    siyahi.forEach(li => {
        arr.push(li.firstElementChild.innerText);
    });
    if(!sorted) {
        arr.sort((a,b) => {
            if(a > b) return 1;
            if(a < b) return -1;
            return 0;
        });
        sorted = true;
        e.target.classList.remove('low');
        e.target.classList.add('high');
    } else {
        arr.sort((a,b) => {
            if(a < b) return 1;
            if(a > b) return -1;
            return 0;
        });
        sorted = false;
        e.target.classList.remove('high');
        e.target.classList.add('low');
    }

    list.innerHTML= '';
    arr.forEach(item => {
        addListItem(item, list);
    });
});