document.addEventListener('DOMContentLoaded', () => {
    const pattern = document.querySelector('#pattern');
    const target  = document.querySelector('#target');
    const btn     = document.querySelector('#btn');
    const result  = document.querySelector('#result');

    btn.addEventListener('click', () => {
        if (pattern.value && target.value) {
            const regexp = new RegExp(pattern.value);
            if (regexp.test(target.value)) {
                result.textContent = '〇';
            } else {
                result.textContent = '×'
            }
        }
    });
});