document.addEventListener('DOMContentLoaded', () => {
    const pattern     = document.getElementById('pattern');
    const option      = document.getElementById('option');
    const target      = document.getElementById('target');
    const test_button = document.getElementById('btn');
    test_button.addEventListener('click', () => {
        if (!(pattern.value && target.value)) return;
        const re = new RegExp(pattern.value, option.value);
        let result = '';
        if (re.test(target.value)) {
            result = '○';
        } else {
            result = '×';
        }
        document.getElementById('result').textContent = result; 
    });

});