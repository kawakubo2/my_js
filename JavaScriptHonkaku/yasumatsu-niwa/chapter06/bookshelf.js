document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const price = document.getElementById('price');
    const error_summary = document.getElementById('error_summary');
    const check_value = () => {
        const errors = [];
        if (title.value === '') {
            errors.push('題名は必須入力です。');
        }
        if (author.value === '') {
            errors.push('著者は必須入力です。');
        }
        if (price.value === '') {
            errors.push('価格は必須入力です。');
        }
        if (!/[0-9]+/.test(price.value)) {
            errors.push('価格の形式に誤りがあります。');
        }
        return errors;
    }

    const print_errors = errors => {
        for (const error of errors) {
            const li = document.createElement('li');
            const text = document.createTextNode(error);
            li.appendChild(text);
            error_summary.appendChild(li);
        }
    }

    document.getElementById('main').addEventListener('click', event => {
        error_summary.textContent = '';
        const errors = check_value();
        if (errors.length > 0) {
            print_errors(errors);
        }
    })
});