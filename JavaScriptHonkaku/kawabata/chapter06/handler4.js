document.addEventListener('DOMContentLoaded', 
    () => {
        document.getElementById('btn').addEventListener('click', () => alert('ボタンがクリックされました。'));
        document.getElementById('btn').addEventListener('click', () => {
            document.getElementById('main').style.background = 'lemonchiffon';
        });
});