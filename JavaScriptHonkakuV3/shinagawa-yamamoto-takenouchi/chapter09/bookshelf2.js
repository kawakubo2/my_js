document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title');
    const publisher = document.querySelector('#publisher');
    const price = document.querySelector('#price');
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

    function createTdWithButton(clazz, buttonName) {
        const td = document.createElement('td');
        const button = document.createElement('input');
        button.type = 'button';
        button.classList.add(clazz);
        button.value = buttonName;
        td.appendChild(button);
        return td;
    }

    function createTd(str) {
        const td = document.createElement('td');
        const text = document.createTextNode(str);
        td.appendChild(text);
        return td;
    }

    function createTr() {
        const tr = document.createElement('tr');
        tr.appendChild(createTd(title.value));
        tr.appendChild(createTd(publisher.value));
        tr.appendChild(createTd(price.value));
        tr.appendChild(createTdWithButton('add', '追加'));
        return tr;
    }


    items.addEventListener('click', () => {
        const errors = validate_input();
        error_summary.textContent = '';
        if (errors.length > 0) {
            print_errors(errors);
            return;
        }
        const tr = createTr();
        items.appendChild(tr);
    });
});