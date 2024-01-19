document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title');
    const publisher = document.querySelector('#publisher');
    const price = document.querySelector('#price');
    const tbody = document.querySelector('#items');
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
        tr.append(td_title);
        tr.append(td_publisher);
        tr.append(td_price);
        return tr;
    }

    tbody.addEventListener('click', () => {
        const errors = validate_input();
        if (errors.length > 0) {
            print_errors(errors);
            return;
        }
        tbody.append(create_tr());
    });

});