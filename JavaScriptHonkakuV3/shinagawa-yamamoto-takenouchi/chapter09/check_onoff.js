document.addEventListener('DOMContentLoaded', () => {
    const email_div = document.querySelector('#email-field');
    email_div.style.display = 'none';
    const onoff = document.querySelector('#onoff');
    onoff.addEventListener('click', () => {
        if (onoff.checked) {
            console.log(onoff.value);
            email_div.style.display = 'block';
        } else {
            console.log('チェックされていません。');
            email_div.style.display = 'none';
        }
    });
});