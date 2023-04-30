document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        alert('ボタンがクリックされました。');
    });
    document.getElementById('btn').addEventListener('click', function() {
        document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow';
    });
});