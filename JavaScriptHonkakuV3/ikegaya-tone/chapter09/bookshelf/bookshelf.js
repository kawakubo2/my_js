document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title');
    const publisher = document.querySelector('#publisher');
    const price = document.querySelector('#price');
    const add_button = document.querySelector('.add');
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
        if (title?.value?.replace('　', '')?.trim() === '') {
            errors.push('題名は必須入力です。')
        }
        if (publisher?.value?.replace('　', '')?.trim() === '') {
            errors.push('題名は必須入力です。')
        }
        if (price?.value?.replace('　', '')?.trim() === '') {
            errors.push('価格は必須入力です。')
        } else if (!/^[0-9]+$/.test(price.value)) {
            errors.push('価格の形式に誤りがあります。')
        }
        return errors;
    };

    add_button.addEventListener('click', () => {
        const errors = validate_input();
        if (errors.length > 0) {
            print_errors(errors);
            return;
        }
        document.querySelector('#fm').reset();
        title.focus();
    });

})