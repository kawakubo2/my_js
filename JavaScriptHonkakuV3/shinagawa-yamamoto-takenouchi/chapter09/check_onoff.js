document.addEventListener('DOMContentLoaded', () => {
    const email_div = document.querySelector('#email-field');
    email_div.style.display = 'none';
    const onoff = document.querySelector('#onoff');
    const email = document.querySelector('#email');
    onoff.addEventListener('click', () => {
        if (onoff.checked) {
            console.log(onoff.value);
            email_div.style.display = 'block';
            email.disabled = false;
        } else {
            console.log('チェックされていません。');
            email_div.style.display = 'none';
            email.disabled = true;
        }
    });
});