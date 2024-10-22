document.addEventListener('DOMContentLoaded', () => {
    const pattern = document.querySelector('#pattern');
    const target  = document.querySelector('#target');
    const btn     = document.querySelector('#btn');
    const result  = document.querySelector('#result');

    btn.addEventListener('click', () => {
        if (pattern.value && target.value) {
            const regexp = new RegExp(pattern);
            if (regexp.test(target)) {
                result.textContent = '〇';
            } else {
                result.textContent = '×'
            }
        }
    });
});