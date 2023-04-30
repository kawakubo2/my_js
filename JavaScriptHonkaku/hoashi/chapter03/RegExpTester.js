document.addEventListener('DOMContentLoaded', () => {
    const pattern = document.getElementById('pattern');
    const target = document.getElementById('target');
    const result = document.getElementById('result');
    const btn    = document.getElementById('btn');
    let reg = null;
    btn.addEventListener('click', () => {
        if (pattern.value && target.value) {
            reg = new RegExp(pattern.value);
            result.textContent = reg.test(target.value) ? '○': '×';
        }
    });
});