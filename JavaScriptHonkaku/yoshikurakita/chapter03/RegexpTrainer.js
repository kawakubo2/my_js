document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        let pattern = document.getElementById('pattern').value;
        let target = document.getElementById('target').value;
        let result = document.getElementById('result');
        let regexp = new RegExp(pattern);
        if (regexp.test(target)) {
            result.textContent = '○';
        } else {
            result.textContent = '×';
        }
    });
});