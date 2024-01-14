document.addEventListener('DOMContentLoaded', () => {
    function myalert() {
        alert('こんにちは！');
    }
    const target = document.querySelector('#target');
    target.addEventListener('click', myalert);
    document.querySelector('#btn').addEventListener('click', () => {
        target.removeEventListener('click', myalert);
    });
    target.addEventListener('click', () => {
        console.log(new Date().toLocaleTimeString());
    });
    let display_flag = true;
    target.addEventListener('click', () => {
        if (display_flag) {
            target.style.border = '3px solid red';
        } else {
            target.style.border = '';
        }
        display_flag = !display_flag;
    });
});