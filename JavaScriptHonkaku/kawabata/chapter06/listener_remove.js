document.addEventListener('DOMContentLoaded', function() {

    let btn = document.getElementById('btn');
    let remove_btn = document.getElementById('remove');

    let listener = () => alert('こんにちは、世界！');
    let listener2 = () => alert('こんにちは、イベントリスナ！');

    btn.addEventListener('click', listener, false);
    btn.addEventListener('click', listener2, false);
    remove_btn.addEventListener('click', function() {
        btn.removeEventListener('click', listener);
    });
});