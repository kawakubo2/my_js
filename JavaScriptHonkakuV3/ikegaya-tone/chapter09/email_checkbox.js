const abc = document.querySelector('#abc');
const fm = document.querySelector('#fm');
abc.addEventListener('click', () => {
    if (abc.checked) {
        const email = document.createElement('input');
        email.type = 'email';
        email.id = 'email';
        email.name = 'email';
        fm.append(email);
    } else {
        const email = document.querySelector('#email');
        fm.removeChild(email);
    }
});