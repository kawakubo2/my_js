document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('button').addEventListener('click', function(e) {
        e.preventDefault();
        let result = document.getElementById('result');
        let pattern = document.getElementById('pattern');
        let target = document.getElementById('target');
        const reg = new RegExp(pattern.value);
        if (reg.test(target.value)) {
            result.textContent = '○';
        } else {
            result.textContent = '×';
        }
    });
});