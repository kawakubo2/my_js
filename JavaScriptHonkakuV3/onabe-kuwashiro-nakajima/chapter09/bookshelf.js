document.addEventListener('DOMContentLoaded', () => {
    const tbody     = document.querySelector('#items');
    const form      = document.querySelector('#fm');
    const first_tr  = document.querySelector('#table-header')
    const title     = document.querySelector('#title');
    const publisher = document.querySelector('#publisher');
    const price     = document.querySelector('#price');
    const error_summary = document.querySelector('#error_summary');    

    function is_empty(str) {
        return str === null || str.replace('　', '').trim().length === 0;
    }
    function validate_input() {
        const errors = [];
        if (is_empty(title.value)) {
            errors.push('題名は必須入力です。');
        }
        if (is_empty(publisher.value)) {
            errors.push('出版社は必須入力です。');
        }
        if (is_empty(price.value)) {
            errors.push('価格は必須入力です。');
        } else {
            if (!/^\d+$/.test(price.value) || price.value < 0) {
                errors.push('価格は正の整数を入力してください。');
            }
        }
        return errors;
    }

    function print_errors(errors) {
        const fragment = document.createDocumentFragment();
        for (const error of errors) {
            const li = document.createElement('li');
            li.textContent = error;
            fragment.append(error);
        }
        error_summary.append(fragment);
    }

    function create_button(button_name, clazz) {
        const button = document.createElement('input');
        button.type = 'button';
        button.classList.add(clazz);
        button.value = button_name;
        return button
    }

    function create_td_with_button(button_name, clazz) {
        const td = document.createElement('td');
        td.append(create_button(button_name, clazz));
        return td;
    }

    function create_td(str) {
        const td = document.createElement('td');
        td.textContent = str;
        return td;
    }

    function create_tr() {
        const tr = document.createElement('tr');
        const td_title = create_td(title.value);
        const td_publisher = create_td(publisher.value);
        const td_price = create_td(price.value);
        const td_add_button = create_td_with_button('追加', 'add');
        const td_delete_button = create_td_with_button('削除', 'delete');
        const td_up_button = create_td_with_button('△', 'up');
        const td_down_button = create_td_with_button('▽', 'down');
        const td_top_button = create_td_with_button('Top', 'top');
        const td_bottom_button = create_td_with_button('Bottom', 'bottom');
        tr.append(td_title);
        tr.append(td_publisher);
        tr.append(td_price);
        tr.append(td_add_button);
        tr.append(td_delete_button);
        tr.append(td_up_button);
        tr.append(td_down_button);
        tr.append(td_top_button);
        tr.append(td_bottom_button);
        return tr;
    }

    function clear_form() {
        form.reset();
        title.focus();
    }

    function add_tr(current_tr) {
        const errors = validate_input();
        if (errors.length > 0) {
            print_errors(errors);
            return;
        }
        current_tr.after(create_tr());
        clear_form();
    }

    tbody.addEventListener('click', (e) => {
        const target = e.target;
        const current_tr = target.parentNode.parentNode;
        if (target.classList.contains("add")) {
            add_tr(current_tr);
        } else if (target.classList.contains("delete")) {
            // tbody.removeChild(current_tr)
            current_tr.remove();
        } else if (target.classList.contains("up")) {
            const prev_tr = current_tr.previousElementSibling;
            if (prev_tr === first_tr) return;
            prev_tr.before(current_tr);
        } else if (target.classList.contains("down")) {
            const next_tr = current_tr.nextElementSibling;
            if (next_tr) {
                next_tr.after(current_tr);
            }
        } else if (target.classList.contains("top")) {
            first_tr.after(current_tr);
        } else if (target.classList.contains("bottom")) {
            tbody.append(current_tr);
        }
    });

    tbody.addEventListener('dblclick', (e) => {

    });

});