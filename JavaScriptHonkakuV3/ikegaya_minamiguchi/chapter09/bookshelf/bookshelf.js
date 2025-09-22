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
        } else if (!(/^\d+$/.test(price.value))) {
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
        tr.append(create_td(title));
        tr.append(create_td(publisher));
        tr.append(create_td(price));
        tr.append(create_td_with_button('追加', 'add'));
        e.target.parentElement.parentElement.after(tr);
    }

    function create_td(value) {
        const td = document.createElement('td');
        td.textContent = value;
        return td;
    }

    function create_button(text, clazz) {
        const button = document.createElement('input');
        button.type = 'button';
        button.classList.add(clazz);
        button.value = text;
        return button;
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
        }
    });
});