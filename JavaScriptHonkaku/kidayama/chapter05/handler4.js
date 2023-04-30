document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        window.alert('ボタンがクリックされました。');
    }, false);
    document.getElementById('btn').addEventListener('click', function() {
        document.getElementsByTagName('body')[0].style.background = 'yellow';
    }, false)
}, false);