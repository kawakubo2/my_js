document.addEventListener('DOMContentLoaded', () => {
    const pattern = document.getElementById('pattern');
    const option  = document.getElementById('option');
    const target  = document.getElementById('target');
    const result  = document.getElementById('result');
    
    document.getElementById('btn').addEventListener('click', event => {
        event.preventDefault();
        result.textContent = '';
        if (pattern.value !== '' && target.value !== '') {
            const regexp = option ? new RegExp(pattern.value, option.value) : new RegExp(pattern.value);
            if (regexp.test(target.value)) {
                result.textContent = '○';
            } else {
                result.textContent = '×';
            }
        }
    });
});