document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        alert('ボタンがクリックされました。');
    });
    document.getElementById('btn').addEventListener('click', function() {
        document.getElementById('result').style.backgroundColor = 'Yellow';
    });

});