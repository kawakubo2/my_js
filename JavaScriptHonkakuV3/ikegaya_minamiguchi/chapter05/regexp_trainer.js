document.addEventListener('DOMContentLoaded', () => {
    const pattern = document.querySelector('#pattern');
    const target  = document.querySelector('#target');
    const result  = document.querySelector('#result');
    const btn     = document.querySelector('#btn');

    btn.addEventListener('click', () => {
        const regexp = new RegExp(pattern.value);
        if (regexp.test(target.value)) {
            result.textContent = '〇';
        } else {
            result.textContent = '×';
        }
    });
});