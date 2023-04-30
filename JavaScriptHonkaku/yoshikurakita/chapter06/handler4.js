document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        window.alert('ボタンがクリックされました。');
    }, false);
    document.getElementById('btn').addEventListener('click', function() {
        document.body.style.backgroundColor = 'Yellow';
    }, false);
}, false);