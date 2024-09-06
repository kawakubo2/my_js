document.addEventListener('DOMContentLoaded', () => {
    const auth_button = document.querySelector('#auth-button');

    const style_button = document.querySelector('#style-button');
    style_button.addEventListener('click', () => {
        const divs = document.querySelectorAll('.container');
        divs.forEach(div => div.classList.toggle('div-style'))
    });

    const username = document.querySelector('#username');
    const password = document.querySelector('#password');

    function enable_auth_button() {
        if (username?.value?.trim().length >= 8
         && password?.value?.trim().length >= 8) {
            auth_button.disabled = false;
         } else {
            auth_button.disabled = true;
         }
    }

    username.addEventListener('input', enable_auth_button);
    password.addEventListener('input', enable_auth_button);
});