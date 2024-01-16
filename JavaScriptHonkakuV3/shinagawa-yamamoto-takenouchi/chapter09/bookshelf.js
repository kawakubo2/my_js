document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title');
    const publisher = document.querySelector('#publisher');
    const price = document.querySelector('#price');
    const btn = document.querySelector('#items input[type="button"]');
    const error_summary = document.querySelector('#error_summary');
    const items = document.querySelector('#items');
    const fm = document.querySelector('#fm');

    let in_edit_flag = false;

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
        const td_title = create_td(title.value, 'editable');
        const td_publisher = create_td(publisher.value, 'editable');
        const td_price = create_td(price.value, 'editable');
        const td_add = create_td_with_button('追加', 'add');
        const td_delete = create_td_with_button('削除', 'delete');
        const td_up = create_td_with_button('△', 'up');
        const td_down = create_td_with_button('▽', 'down');
        const td_top = create_td_with_button('TOP', 'top');
        const td_bottom = create_td_with_button('BOTTOM', 'bottom');
        tr.append(td_title);
        tr.append(td_publisher);
        tr.append(td_price);
        tr.append(td_add);
        tr.append(td_delete);
        tr.append(td_up);
        tr.append(td_down);
        tr.append(td_top);
        tr.append(td_bottom);
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

    function create_td(str, clazz, attrs = {}) {
        const td = document.createElement('td');
        td.textContent = str;
        td.classList.add(clazz);
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

    function edit_td_content_start(target) {
        in_edit_flag = true;
        const origin = target.textContent;
        target.textContent = '';
        const textbox = document.createElement('input');
        textbox.type = 'text';
        textbox.className = 'edit';
        textbox.value = origin;
        target.append(textbox);
        textbox.focus();
        textbox.select();
    }

    function edit_td_content_end(target) {
        in_edit_flag = false;
        const origin = target.value;
        const parent = target.parentNode;
        parent.textContent = origin;
    }

    items.addEventListener('click', (e) => {
        if (in_edit_flag) return;
        const current = e.target.parentNode.parentNode;
        const classes = e.target.classList;
        if (classes.contains('add')) {
            const errors = validate_input();
            error_summary.textContent = '';
            if (errors.length > 0) {
                print_errors(errors);
                return;
            }
            current.after(create_tr());
            clear_form();
        } else if (classes.contains('delete')) {
            items.removeChild(current);
        } else if (classes.contains('up')) {
            const prev_tr = current.previousElementSibling;
            if (prev_tr !== document.querySelector('#table-header')) {
                prev_tr.before(current);
            }
        } else if (classes.contains('down')) {
            const next_tr = current.nextElementSibling;
            if (next_tr !== null) {
                next_tr.after(current);
            }
        } else if (classes.contains('top')) {
            const tr_header = document.querySelector('#table-header');
            tr_header.after(current);
        } else if (classes.contains('bottom')) {
            items.append(current);
        }
    });
    items.addEventListener('dblclick', (e) => {
        if (e.target.classList.contains('editable')) {
            edit_td_content_start(e.target);
        }
    });
    items.addEventListener('focusout', (e) => {
        if (e.target.parentNode.classList.contains('editable')) {
            edit_td_content_end(e.target);
        }
    });
});