document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById("btn").addEventListener("click", function() {
        let pattern = document.getElementById('pattern');
        let target = document.getElementById('target');
        let result = document.getElementById('result');
        let regexp = new RegExp(pattern.value);
        if (regexp.test(target.value)) {
            result.textConent = '○';
        } else {
            result.textConent = 'x';
        }
    });
});