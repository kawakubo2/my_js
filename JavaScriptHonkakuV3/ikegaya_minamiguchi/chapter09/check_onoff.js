document.addEventListener('DOMContentLoaded', () => {
    const onoff = document.querySelector('#onoff');
    const email = document.querySelector('#email');
    const btn = document.querySelector('#btn');
    email.disabled = true;
    btn.disabled = false;
    onoff.addEventListener('change', () => {
        if (onoff.checked) {
            email.disabled = false;
            btn.disabled = true;
        } else {
            email.value = '';
            email.disabled = true;
            btn.disabled = false;
        }
    });
    email.addEventListener('input', () => {
        if (email.value.trim() === '') {
            btn.disabled = true;
        } else {
            // 本来はEmailのバリデーションを行い、正しければボタンをクリックできるようにする
            btn.disabled = false;
        }
    })
});