const createTd = text => {
    const td = document.createElement('td');
    const textNode = document.createTextNode(text);
    td.appendChild(textNode);
    console.trace();
    return td;
};

const createTdWithButton = (clazz, label) => {
    const td = document.createElement('td');
    const button = document.createElement('input');
    button.type = 'button';
    button.className = clazz;
    button.value = label;
    td.appendChild(button);
    console.trace();
    return td;
};

const validate = (title, author, price) => {
    let error_summary = document.getElementById('error_summary');
    error_summary.textContent = '';
    const errors = [];
    if (title.value.trim() === '') errors.push('題名は必須入力です。');
    if (author.value.trim() === '') errors.push('作者は必須入力です。');
    if (price.value.trim() === '') errors.push('価格は必須入力です。');
    if (!/^\d+$/.test(price.value)) errors.push('価格は0以上の整数を入力してください。');
    for (const error of errors) {
        const li = document.createElement('li');
        const text = document.createTextNode(error);
        li.appendChild(text);
        error_summary.appendChild(li);
    }
    return errors.length === 0;
};

const addTr = (title, author, price, tbody, target) => {
    if (!validate(title, author, price)) return;
    const newTr = document.createElement('tr');

    newTr.appendChild(createTd(title.value));
    newTr.appendChild(createTd(author.value));
    newTr.appendChild(createTd(price.value));

    newTr.appendChild(createTdWithButton('add', '追加'));
    newTr.appendChild(createTdWithButton('delete', '削除'));
    newTr.appendChild(createTdWithButton('up', '△'));
    newTr.appendChild(createTdWithButton('down', '▽'));
    
    const nextTr = target.parentNode.parentNode.nextElementSibling;
    tbody.insertBefore(newTr, nextTr);

    title.value = '';
    author.value = '';
    price.value = '';
    title.focus();
};

const deleteTr = (tbody, target) => {
    tbody.removeChild(target.parentNode.parentNode);
};

const upTr = (tbody, target) => {
    const currentTr = target.parentNode.parentNode;
    let prevTr = currentTr.previousElementSibling;
    if (prevTr.id !== 'booklist-header') {
        tbody.insertBefore(currentTr, prevTr);
    }
};

const downTr = (tbody, target) => {
    const currentTr = target.parentNode.parentNode;
    let nextTr = currentTr.nextElementSibling;
    if (nextTr) {
        tbody.insertBefore(currentTr, nextTr.nextElementSibling);
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const price = document.getElementById('price');
    const tbody = document.getElementById('booklist');

    tbody.addEventListener('click', function(event) {
        const target = event.target;
        switch(target.className) {
            case 'add':
                console.time('addTr');
                addTr(title, author, price, tbody, target);
                console.timeEnd('addTr');
                break;
            case 'delete':
                deleteTr(tbody, target);
                break;
            case 'up':
                upTr(tbody, target);
                break;
            case 'down':
                downTr(tbody, target);
                break;
        }
    });
});