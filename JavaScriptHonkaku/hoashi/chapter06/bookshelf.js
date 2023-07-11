document.addEventListener('DOMContentLoaded', () => {
    const title  = document.getElementById('title');
    const author = document.getElementById('author');
    const price  = document.getElementById('price');
    const tbody  = document.getElementById('tbody');
    const error_list = document.getElementById('error_summary');

    const check_input = event => {
        const errors = [];
        if (title.value === null || title.value === '') {
            errors.push('題名は必須です。');
        }
        if (author.value === null || author.value === '') {
            errors.push('著者は必須です。');
        }
        if (price.value === null || price.value === '' || price.value < 0) {
            errors.push('0以上の金額を入力してください。');
        }
        return errors;
    }

    const print_errors = errors => {
        error_list.textContent = '';
        for (const error of errors) {
            const li = document.createElement('li');
            const text = document.createTextNode(error);
            li.appendChild(text);
            error_list.appendChild(li);
        }
    }

    const clear_element = () => {
        title.value = '';
        author.value = '';
        price.value = '';
        title.focus();
    }

    const create_td = value => {
        const td = document.createElement('td');
        const text = document.createTextNode(value);
        td.appendChild(text);
        return td;
    }

    const create_td_with_button = (clazz, button_name) => {
        const td = document.createElement('td');
        const button = create_button(clazz, button_name);
        td.appendChild(button);
        return td;
    }

    const create_button = (clazz, button_name) => {
        const button = document.createElement('input');
        button.type = 'button';
        button.className = clazz;
        button.value = button_name;
        return button;
    }
    const create_tr = () => {
        const tr = document.createElement('tr');
        const titleTd  = create_td(title.value);
        const authorTd = create_td(author.value);
        const priceTd  = create_td(price.value);
        const addButtonTd  = create_td_with_button('add', '追加');
        const deleteButtonTd  = create_td_with_button('delete', '削除');
        const upButtonTd  = create_td_with_button('up', '△');
        const downButtonTd  = create_td_with_button('down', '▽');
        tr.appendChild(titleTd);
        tr.appendChild(authorTd);
        tr.appendChild(priceTd);
        tr.appendChild(addButtonTd);
        tr.appendChild(deleteButtonTd);
        tr.appendChild(upButtonTd);
        tr.appendChild(downButtonTd);
        return tr;
    }

    tbody.addEventListener('click', event => {

        const target_tr = event.target.parentNode.parentNode;

        const add_tr = () => {
            const errors = check_input();
            if (errors.length > 0) {
                print_errors(errors);
                return;
            }
            const tr = create_tr();
            tbody.insertBefore(tr, target_tr.nextElementSibling);
            error_list.textContent = '';
            clear_element();
        };

        const delete_tr = () => {
            tbody.removeChild(target_tr);
        };

        const down_tr = () => {
            let next = target_tr.nextElementSibling;
            if (next) {
                next = next.nextElementSibling;
            }
            tbody.insertBefore(target_tr, next);
        };

        const up_tr = () => {
            const prev = target_tr.previousElementSibling;
            if (prev == document.getElementById('thead')) return;
            tbody.insertBefore(target_tr, prev);
        };

        switch(event.target.className) {
            case "add":
                add_tr();
                break;
            case "delete":
                delete_tr();
                break;
            case "up":
                up_tr();
                break;
            case "down":
                down_tr();
                break;
            default:
                console.warn("unkown event");
                break;
        }
    })
});