document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title');
    const publisher = document.querySelector('#publisher');
    const price = document.querySelector('#price');
    const error_summary = document.querySelector('#error-summary');
    const tbody = document.querySelector('#book-list');
    const form = document.querySelector('#bookshelf-form');

    function isEmpty(value) {
        return value === null || value.trim() === '';
    }

    function isNonNegativeNumber(value) {
        return /^\d+$/.test(value);
    }

    function validate() {
        const errors = [];
        error_summary.textContent = '';
        if (isEmpty(title.value)) {
            errors.push('題名は必須入力です。');
        }
        if (isEmpty(publisher.value)) {
            errors.push('出版社は必須入力です。');
        }
        if (isEmpty(price.value)) {
            errors.push('価格は必須入力です。');
        } else if (!isNonNegativeNumber(price.value)) {
            errors.push('価格は0以上の整数値を入力してください。');
        }
        return errors;
    }

    function print_errors(errors) {
        const fragment = document.createDocumentFragment();
        for (const error of errors) {
            const li = document.createElement('li');
            li.textContent = error;
            fragment.append(li);
        }
        error_summary.append(fragment);
    }

    function create_tr(e, title, publisher, price) {
        const tr = document.createElement('tr');
        tr.append(create_td(title, 'editable', 'title-td'));
        tr.append(create_td(publisher, 'editable', 'publisher-td'));
        tr.append(create_td(price, 'editable', 'price-td'));
        tr.append(create_td_with_button('追加', 'add'));
        tr.append(create_td_with_button('削除', 'remove'));
        tr.append(create_td_with_button('△', 'up'));
        tr.append(create_td_with_button('▽', 'down'));
        tr.append(create_td_with_button('先頭へ移動', 'top'));
        tr.append(create_td_with_button('末尾へ移動', 'bottom'));
        e.target.closest('tr').after(tr);
    }

    function create_td(value, ...classes) {
        const td = document.createElement('td');
        td.textContent = value;
        classes.forEach(clazz => td.classList.add(clazz));
        return td;
    }

    function create_button(text, ...classes) {
        const button = document.createElement('input');
        button.type = 'button';
        classes.forEach(clazz => button.classList.add(clazz));
        button.value = text;
        return button;
    }

    function create_input(type, value, ...classes) {
        const input = document.createElement('input');
        input.type = type;
        input.value = value;
        classes.forEach(clazz => input.classList.add(clazz));
        return input;
    }

    function create_td_with_button(text, clazz) {
        const td = document.createElement('td');
        const button = create_button(text, clazz);
        td.append(button);
        return td;
    }


    tbody.addEventListener('click', (e) => {
        if (e.target.classList.contains('add')) {
            const errors = validate();
            if (errors.length > 0) {
                print_errors(errors);
                return;
            }
            create_tr(e, 
                title.value.trim(), 
                publisher.value.trim(), 
                price.value.trim());
            form.reset();
            title.focus();
        } else if (e.target.classList.contains('remove')) {
            tbody.removeChild(e.target.closest('tr'));
        } else if (e.target.classList.contains('up')) {
            const tr = e.target.closest('tr');
            const prev_tr = tr.previousElementSibling;
            if (prev_tr?.id === 'book-list-header') return;
            prev_tr.before(tr);
        } else if (e.target.classList.contains('down')) {
            const tr = e.target.closest('tr');
            const next_tr = tr.nextElementSibling;
            if (next_tr) {
                next_tr.after(tr);
            }
        } else if (e.target.classList.contains('top')) {
            const header_tr = document.querySelector('#book-list-header');
            const tr = e.target.closest('tr');
            header_tr.after(tr);
        } else if (e.target.classList.contains('bottom')) {
            const tr = e.target.closest('tr');
            tbody.append(tr);
        } else if (e.target.classList.contains('edit-commit')) {
            const edit_td = e.target.closest('td');
            const textbox = edit_td.querySelector('.textbox');
            const span = edit_td.querySelector('.result');
            span.textContent = '';
            if (edit_td.classList.contains('title-td')) {
                if (isEmpty(textbox.value)) {
                    span.textContent = '題名は必須入力です。';
                    return;
                }
            } else if (edit_td.classList.contains('publisher-td')) {
                if (isEmpty(textbox.value)) {
                    span.textContent = '出版社は必須入力です。';
                    return;
                }
            } else if (edit_td.classList.contains('price-td')) {
                if (isEmpty(textbox.value)) {
                    span.textContent = '価格は必須入力です。';
                    return;
                } else if (!isNonNegativeNumber(textbox.value)) {
                    span.textContent = '価格は0以上の整数値を入力してください。';
                    return;
                }
            } else {
                throw new Error('想定外のクラス属性が指定された')
            }
            edit_td.textContent = textbox.value;
        } else {
            // 今回は記述しない
        }
    });
 
    tbody.addEventListener('dblclick', (e) => {
        if (e.target.classList.contains('editable')) {
            const prev = e.target.textContent;
            const textbox = create_input('text', prev, 'textbox');
            e.target.textContent = '';
            e.target.append(textbox);
            const commitButton = create_button('×', 'edit-commit');
            e.target.append(commitButton);
            const br = document.createElement('br');
            const errorMsg = document.createElement('span');
            errorMsg.classList.add('result');
            e.target.append(br);
            e.target.append(errorMsg);
        }
    })
});