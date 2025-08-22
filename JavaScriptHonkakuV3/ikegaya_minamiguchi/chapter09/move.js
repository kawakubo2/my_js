document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#btn').addEventListener('click', () => {
        const b = document.querySelector('#b');
        const d = document.querySelector('#d');
        d.after(b);
    });

});