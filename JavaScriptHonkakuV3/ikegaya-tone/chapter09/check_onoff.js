document.addEventListener('DOMContentLoaded', () => {
    const mail_button = document.querySelector('#mail-button');
    const email = document.querySelector('#email');

    mail_button.addEventListener('click', () => {
        if (mail_button.checked) {
            email.style.display = 'block';
        } else {
            email.style.display = 'none';
        }
    });
});