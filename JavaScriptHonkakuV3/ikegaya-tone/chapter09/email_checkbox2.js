const abc = document.querySelector('#abc');
const fm = document.querySelector('#fm');
const email = document.querySelector('#email');
email.style.display = 'none';
abc.addEventListener('click', () => {
    if (abc.checked) {
        email.style.display = 'block';
    } else {
        email.style.display = 'none';
    }
});