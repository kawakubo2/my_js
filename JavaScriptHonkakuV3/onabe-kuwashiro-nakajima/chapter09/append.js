document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title');
    const url   = document.querySelector('#url');
    const list  = document.querySelector('#list');
    const btn   = document.querySelector('#btn');
    const error_summary = document.querySelector('#error_summary');
    const form1 = document.querySelector('#form1');

    function validate_input() {
        error_summary.textContent = '';
        const errors = [];
        if (title.value === null || title.value === undefined || title.value === "") {
            errors.push("サイト名は必須入力です。");
        }
        if (url.value === null || url.value === undefined || url.value === "") {
            errors.push("URLは必須入力です。");
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

    function clear_form() {
        form1.reset();
        title.focus();
    }

    btn.addEventListener('click', () => {
        // 入力値検証
        const errors = validate_input();
        if (errors.length !== 0) {
            // エラーメッセージ表示
            print_errors(errors);
            return;
        }

        const li = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = url.value;
        anchor.target = '_blank';
        anchor.textContent = title.value;
        li.append(anchor);
        list.append(li);

        clear_form();
    });
});