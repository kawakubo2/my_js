document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title');
    const publisher = document.querySelector('#publisher');
    const price = document.querySelector('#price');
    const btn = document.querySelector('#items input[type="button"]');
    const error_summary = document.querySelector('#error_summary');
    const items = document.querySelector('#items');
    const fm = document.querySelector('#fm');

    function validate_input() {
        const errors = [];
        if (title.value === '') {
            errors.push('題名は必須入力です。');
        }
        if (publisher.value === '') {
            errors.push('出版社は必須入力です。');
        }
        if (price.value === '') {
            errors.push('価格は必須入力です。');
        } else {
            if (!(/^\d+$/.test(price.value) && price.value >= 0)) {
                errors.push("価格は0以上の整数値を入力してください。");
            }
        }
        return errors;
    }

    function print_errors(errors) {
        const frag = document.createDocumentFragment();
        for (const error of errors) {
            const li = document.createElement('li');
            li.textContent = error;
            li.style.color = 'red';
            frag.append(li);
        }
        error_summary.append(frag);
    }

    function create_tr() {
        const tr = document.createElement('tr');
        const td_title = create_td(title.value);
        const td_publisher = create_td(publisher.value);
        const td_price = create_td(price.value);
        const td_add = create_td_with_button('追加', 'add');
        const td_delete = create_td_with_button('削除', 'delete');
        const td_up = create_td_with_button('△', 'up');
        const td_down = create_td_with_button('▽', 'down');
        tr.append(td_title);
        tr.append(td_publisher);
        tr.append(td_price);
        tr.append(td_add);
        tr.append(td_delete);
        tr.append(td_up);
        tr.append(td_down);
        return tr;
    }

    function create_td_with_button(button_value, clazz, attrs = {}) {
        const td = document.createElement('td');
        const button = create_button(button_value, clazz);
        td.append(button);
        return td;
    }

    function create_button(button_value, clazz) {
        const button = document.createElement('input');
        button.type = 'button';
        button.classList.add(clazz);
        button.value = button_value;
        return button;
    }

    function create_td(str, attrs = {}) {
        const td = document.createElement('td');
        td.textContent = str;
        for (const key in attrs) {
            const attr = document.createAttribute(key);
            attr.value = attrs[key];
        }
        return td;
    }

    function clear_form() {
        fm.reset();
        title.focus();
    }

    items.addEventListener('click', (e) => {
        const current = e.target.parentNode.parentNode;
        if (e.target.classList.contains('add')) {
            const errors = validate_input();
            error_summary.textContent = '';
            if (errors.length > 0) {
                print_errors(errors);
                return;
            }
            current.after(create_tr());
        } else if (e.target.classList.contains('delete')) {
            items.removeChild(current);
        } else if (e.target.classList.contains('up')) {
            const prev_tr = current.previousElementSibling;
            if (prev_tr !== document.querySelector('#table-header')) {
                prev_tr.before(current);
            }
        } else if (e.target.classList.contains('down')) {
            const next_tr = current.nextElementSibling;
            if (next_tr !== null) {
                next_tr.after(current);
            }
        }

        clear_form();
    });
});