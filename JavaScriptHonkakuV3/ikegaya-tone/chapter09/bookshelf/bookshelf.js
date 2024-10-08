document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title');
    const publisher = document.querySelector('#publisher');
    const price = document.querySelector('#price');
    const tbody = document.querySelector('#tbody');
    const error_summary = document.querySelector('#error_summary');

    const print_errors = (errors) => {
        for (const error of errors) {
            const li = document.createElement('li');
            li.textContent = error;
            error_summary.append(li);
        }

    };



    const validate_input = () => {
        error_summary.textContent = '';
        const errors = [];
        if (isEmpty(title.value)) {
            errors.push('題名は必須入力です。')
        }
        if (isEmpty(publisher.value)) {
            errors.push('出版社は必須入力です。')
        }
        if (isEmpty(price.value)) {
            errors.push('価格は必須入力です。')
        } else if (!isPositiveNumber(price.value)) {
            errors.push('価格の形式に誤りがあります。')
        }
        return errors;
    };

    const create_tr = () => {
        const tr = document.createElement('tr');
        tr.append(create_td(title.value, 'editable'));
        tr.append(create_td(publisher.value, 'editable'));
        tr.append(create_td(price.value, 'editable'));
        tr.append(create_td_with_button('追加', 'add'));
        tr.append(create_td_with_button('削除', 'delete'));
        tr.append(create_td_with_button('△', 'up'));
        tr.append(create_td_with_button('▽', 'down'));
        tr.append(create_td_with_button('TOP', 'top'));
        tr.append(create_td_with_button('BOTTOM', 'bottom'));
        return tr;
    };

    const create_td = (text, clazz) => {
        const td = document.createElement('td');
        td.textContent = text;
        td.className = clazz;
        return td;
    };

    const create_td_with_button = (button_name, clazz) => {
        const td = document.createElement('td');
        const button = document.createElement('button');
        button.classList.add(clazz);
        button.textContent = button_name;
        td.append(button);
        return td;
    }

    tbody.addEventListener('click', (e) => {
        if (e.target.classList.contains('add')) {
            const errors = validate_input();
            if (errors.length > 0) {
                print_errors(errors);
                return;
            }
            const current_tr = e.target.parentElement.parentElement;
            current_tr.after(create_tr());

            document.querySelector('#fm').reset();
            title.focus();
        } else if (e.target.classList.contains('delete')) {
            const current_tr = e.target.parentElement.parentElement;
            tbody.removeChild(current_tr);
        } else if (e.target.classList.contains('up')) {
            const current_tr = e.target.parentElement.parentElement;
            const previous_tr = current_tr.previousElementSibling;
            if (previous_tr != document.querySelector('#first-row')) {
                previous_tr.before(current_tr);
            }
        } else if (e.target.classList.contains('down')) {
            const current_tr = e.target.parentElement.parentElement;
            const next_tr = current_tr.nextElementSibling;
            next_tr?.after(current_tr);
        } else if (e.target.classList.contains('top')) {
            const current_tr = e.target.parentElement.parentElement;
            document.querySelector('#first-row').after(current_tr);
        } else if (e.target.classList.contains('bottom')) {
            const current_tr = e.target.parentElement.parentElement;
            tbody.lastElementChild.after(current_tr);
        }
    });

    tbody.addEventListener('dblclick', (e) => {
        console.log(e.target.className);
    });
})