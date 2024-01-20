document.addEventListener('DOMContentLoaded', () => {
    const pattern = document.querySelector('#pattern');
    const target  = document.querySelector('#target');
    const btn     = document.querySelector('#btn');
    const result  = document.querySelector('#result');

    btn.addEventListener('click', () => {
        if ((pattern.value !== null && pattern.value.trim().length !== 0)
           && (target.value !== null && target.value.trim().length !== 0)) {
            const reg = new RegExp(pattern.value);
            let s = '';
            if (reg.test(target.value)) {
                s = '○';
            } else {
                s = '×';
            }
            result.textContent = '判定: ' + s;
        }
    });
});