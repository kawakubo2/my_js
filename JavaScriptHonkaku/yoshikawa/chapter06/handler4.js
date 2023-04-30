document.addEventListener('DOMContentLoaded', function() {
    const btn  = document.getElementById('btn');

    btn.addEventListener('click', function() {
        alert('ボタンがクリックされました。');
    });
    btn.addEventListener('click', function() {
        document.getElementsByTagName('body')[0].style.backgroundColor = 'Yellow';
    });
    btn.addEventListener('click', function() {
        console.log('ボタンがクリックされました。');
    });
});