const isEmpty = (value) => value.replace('　', '').trim() === '';

const validate = (title, author, price) => {
    document.getElementById('error_summary').textContent = '';
    let errors = [];
    if (isEmpty(title)) { errors.push('タイトルは必須入力です。'); }
    if (isEmpty(author)) { errors.push('作者は必須入力です。'); }
    if (isEmpty(price)) {
        errors.push('価格は必須入力です。');
    } else {
        if (!(typeof price === 'string' && (Number.parseInt(price) >= 0))) {
            errors.push('価格は0以上の整数値を入力してください。');
        }
    }
    return errors;
}
const displayErrors = (errors) => {
    let frag = document.createDocumentFragment();
    for (let error of errors) {
        let li = document.createElement('li');
        let error_message = document.createTextNode(error);
        li.appendChild(error_message);
        frag.appendChild(li);
    }
    error_summary.appendChild(frag);
}
const createTd = (value) => {
    let td = document.createElement('td');
    let text = document.createTextNode(value);
    td.appendChild(text);
    return td;
}
const createButton = (buttonName, clazz) => {
    const button = document.createElement('input');
    button.type = 'button';
    button.value = buttonName;
    button.className = clazz;
    return button;
}
const createTr = (title, author, price) => {
    const tr = document.createElement('tr');
    const titleTd = createTd(title);
    const authorTd = createTd(author);
    const priceTd = createTd(price);
    const deleteButton = createButton('削除', 'delete');
    const deleteTd = document.createElement('td');
    deleteTd.appendChild(deleteButton);
    const addButton = createButton('追加', 'add');
    const addTd = document.createElement('td');
    addTd.appendChild(addButton);
    tr.appendChild(titleTd);
    tr.appendChild(authorTd);
    tr.appendChild(priceTd);
    tr.appendChild(addTd);
    tr.appendChild(deleteTd);
    return tr;
}

document.addEventListener('DOMContentLoaded', function() {
    const tbodyNode = document.getElementById('booklist');

    tbodyNode.addEventListener('click', function(event) {
        const target = event.target;
        if (target.className === 'delete') {
            tbodyNode.removeChild(target.parentNode.parentNode);
        } else if (target.className === 'add') {
            const nextTr = target.parentNode.parentNode.nextElementSibling;
            const titleNode = document.getElementById('title');
            const authorNode = document.getElementById('author');
            const priceNode = document.getElementById('price');
            const errors = validate(titleNode.value, authorNode.value, priceNode.value);
            if (errors.length > 0) {
                displayErrors(errors);
                return;
            }
            const tr = createTr(titleNode.value, authorNode.value, priceNode.value);
            tbodyNode.insertBefore(tr, nextTr);
            titleNode.value = '';
            authorNode.value = '';
            priceNode.value = '';
            titleNode.focus();
        }
    });
});