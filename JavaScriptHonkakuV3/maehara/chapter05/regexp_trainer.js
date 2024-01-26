document.addEventListener('DOMContentLoaded', () => {
    const pattern = document.querySelector('#pattern');
    const target  = document.querySelector('#target');
    const option  = document.querySelector('#option');
    const btn     = document.querySelector('#btn');
    const result  = document.querySelector('#result');

    btn.addEventListener('click', () => {
        if ((pattern.value !== null && pattern.value.trim().length !== 0)
           && (target.value !== null && target.value.trim().length !== 0)) {
            let reg = null;
            if (option.value) {
                reg = new RegExp(pattern.value, option.value);
            } else {
                reg = new RegExp(pattern.value);
            }
            let s = '';
            if (reg.test(target.value)) {
                s = '○';
            } else {
                s = '×';
            }
            result.textContent = '判定: ' + s;
        }
    });
    console.log("Caf\u00E9");
});