document.addEventListener('DOMContentLoaded', function() {
    let pattern = document.getElementById('pattern');
    let target = document.getElementById('target');
    let result = document.getElementById('result');

    document.getElementById('btn').addEventListener('click', function() {
        result.textContent = '';
        if (pattern.value == null || pattern.value == '') return;
        let regexp = new RegExp(pattern.value);
        if (regexp.test(target.value)) {
            result.textContent = '○';
        } else {
            result.textContent = '×';
        }
    });
});