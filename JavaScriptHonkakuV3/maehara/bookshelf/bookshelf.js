document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#fm1');
    const tbody = document.querySelector('#bookshelf-body');
    const add_button = document.querySelector('#add-button');
    const title = document.querySelector('#title');
    const publisher = document.querySelector('#publisher');
    const price = document.querySelector('#price');
    const error_summary = document.querySelector('#error_summary');

    function is_empty(value) {
        return value === null || value === undefined || value.trim() === '';
    }

    function validate_input() {
        error_summary.textContent = '';
        const errors = [];
        // title
        if (is_empty(title.value)) {
            errors.push('題名は必須入力です。');
        }
        // publisher
        if (is_empty(publisher.value)) {
            errors.push('出版社は必須入力です。 ');
        }
        console.log(`price.value: ${typeof price.value}`);
        // title
        if (!/^(\+|-)?[0-9]+$/.test(price.value)) {
            errors.push('価格は符号なしの整数値で入力してください。');
        } else if (Number.parseInt(price.value) < 0) { 
            errors.push('価格は0以上の整数値を入力してください');
        }
        return errors;
    }

    function print_errors(errors) {
        const frag = document.createDocumentFragment();
        for (const error of errors) {
            const li = document.createElement('li');
            li.textContent = error;
            frag.append(li);
        }
        error_summary.append(frag);
    }

    function create_tr() {
        const tr = document.createElement('tr');
        tr.append(create_td(title.value));
        tr.append(create_td(publisher.value));
        tr.append(create_td(price.value));
        tr.append(create_td_with_button('追加', 'add'));
        tr.append(create_td_with_button('削除', 'delete'));
        return tr;
    }

    function create_td(text) {
        const td = document.createElement('td');
        td.textContent = text;
        return td;
    }

    function create_td_with_button(btn_name, clazz) {
        const td = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'button';
        input.value = btn_name;
        input.className = clazz;
        td.append(input);
        return td;
    }
    
    tbody.addEventListener('click', (e) => {
        // エラーがないときのみ実行される
        if (e.target.className === 'add') {
            const errors = validate_input();
            if (errors.length > 0) {
                print_errors(errors);
                return ;
            }
            const new_tr = create_tr();
            const current_tr = e.target.parentNode.parentNode;
            current_tr.after(new_tr);
        } else if (e.target.className === 'delete') {
            tbody.removeChild(e.target.parentNode.parentNode);
        }

        form.reset();
        title.focus();
    });
});