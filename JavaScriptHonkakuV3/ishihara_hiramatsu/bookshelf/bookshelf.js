document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#bookshelf-form');
    const title = document.querySelector('#title');
    const publisher = document.querySelector('#publisher');
    const price = document.querySelector('#price');

    const tbody = document.querySelector('#tbody');
    const error_summary = document.querySelector('#error_summary');

    function isNullOrEmpty(value) {
        return value === null || value === undefined || value.trim() === '';
    }

    function validate_input() {
        const errors = [];
        if (isNullOrEmpty(title.value)) {
            errors.push('題名は必須入力です。');
        }
        if (isNullOrEmpty(publisher.value)) {
            errors.push('出版社は必須入力です。');
        }
        if (isNullOrEmpty(price.value)) {
            errors.push('価格は必須入力です。');
        } else if (!/^\d+$/.test(price.value)) {
            errors.push('プラスの整数を入力してください。');
        }
        return errors;
    }

    function reset_form() {
        form.reset();
        title.focus();
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

    function create_tr() {
        const tr = document.createElement('tr');
        tr.append(create_td(title.value));
        tr.append(create_td(publisher.value));
        tr.append(create_td(price.value));
        tr.append(create_td_with_button(['add', 'btn', 'btn-primary'], '追加'));
        tr.append(create_td_with_button(['delete', 'btn', 'btn-danger'], '削除'));
        tr.append(create_td_with_button(['up', 'btn', 'btn-secondary'], '△'));
        tr.append(create_td_with_button(['down', 'btn', 'btn-secondary'], '▽'));
        return tr;
    }

    function create_td(text) {
        const td = document.createElement('td');
        td.textContent = text;
        return td;
    }

    function create_td_with_button(classes, button_name) {
        const td = document.createElement('td');
        const button = document.createElement('button');
        if (Array.isArray(classes) && classes.length > 0) {
            button.className = classes.join(' ');
        }
        button.textContent = button_name;
        td.append(button);
        return td;
    }

    tbody.addEventListener('click', (e) => {
        error_summary.textContent = '';
        const tr = document.createElement('tr');

        // 追加ボタンクリック時にのみ入力値検証する
        const classList = e.target.classList;
        if (classList.contains('add')) {
            const errors = validate_input();
            if (errors.length > 0) {
                print_errors(errors);
                return;
            }
            tbody.append(create_tr());
            reset_form();

        } else if (classList.contains('delete')) {
            const current_tr = e.target.parentElement.parentElement;
            tbody.removeChild(current_tr);
        }
    });
});