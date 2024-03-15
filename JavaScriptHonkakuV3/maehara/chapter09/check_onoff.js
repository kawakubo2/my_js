document.addEventListener('DOMContentLoaded', () => {
    const onoff = document.querySelector('#onoff');
    const email = document.querySelector('#email');
    email.disabled = true;

    onoff.addEventListener('click', () => {
        if (onoff.checked) {
            email.disabled = false;
        } else {
            email.value = '';
            email.disabled = true;
        }

    })
});