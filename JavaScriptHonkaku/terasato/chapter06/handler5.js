document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');
    btn.addEventListener('click', function() {
        alert('リスナ1');
    });
    btn.addEventListener('click', function() {
        result.style.backgroundColor = 'yellow';
    });
    btn.addEventListener('click', function() {
        result.style.border = '3px solid blue';
    });
});