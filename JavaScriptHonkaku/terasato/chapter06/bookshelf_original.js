const validateTitle = title => {
    let error = null;
    if (title.replace('　', '').trim().length === 0) {
        error = '書名は必須です。';
    }
    return error;
};

const validateAuthor = author => {
    let error = null;
    if (author.replace().trim().length === 0) {
        error = '著者は必須です。';
    }
    return error;
};

const validatePrice = price => {
    let error = null;
    if (price.replace('　', '').trim().length === 0) {
        error = '価格は必須です。';
    } else if (!/^\d+$/.test(price)) {
        error = '価格は0以上の整数です。';
    }
    return error;
};

const validateForm = (title, author, price) => {
    const error_summary = document.getElementById('error-summary');
    error_summary.textContent = '';
    let errors = [];
    let error = validateTitle(title)
    if (error) errors.push(error);
    error = validateAuthor(author)
    if (error) errors.push(error);
    error = validatePrice(price)
    if (error) errors.push(error);
    for (const error of errors) {
        const li = document.createElement('li');
        const text = document.createTextNode(error);
        li.appendChild(text);
        error_summary.appendChild(li);
    }
    return errors.length === 0;
};

const createTd = text => {
    const td = document.createElement('td');
    td.appendChild(document.createTextNode(text));
    return td;
};

const createTdWithButton = (buttonName, clazz) => {
    const td = document.createElement('td');
    const button = document.createElement('input');
    button.type = 'button';
    button.className = clazz;
    button.value = buttonName;
    td.appendChild(button);
    return td;

}

const createTr = (buttonAttrs, ...texts) => {
    const tr = document.createElement('tr');
    for (const text of texts) {
        tr.appendChild(createTd(text));
    }
    for (const attr of buttonAttrs) {
        tr.appendChild(createTdWithButton(attr.value, attr.clazz));
    }
    return tr;
};

const clearForm = (focus, ...formNodes) => {
    formNodes.forEach(node => node.value = '');
    focus.focus();
}

document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const price = document.getElementById('price');
    const tbody = document.getElementById('booklist');

    tbody.addEventListener('click', function(event) {
        const success = validateForm(title.value, author.value, price.value);
        if (!success) return;
        const nextTr = event.target.parentNode.parentNode.nextElementSibling;
        const buttonAttrs = [
            {buttonName: '追加', clazz: 'add'},
            {buttonName: '削除', clazz: 'delete'},
            {buttonName: '△', clazz: 'up'},
            {buttonName: '▽', clazz: 'down'}
        ];
        const newTr = createTr(buttonAttrs, title.value, author.value, price.value);
        tbody.insertBefore(newTr, nextTr);
        clearForm(title, title, author, price);
    });
});