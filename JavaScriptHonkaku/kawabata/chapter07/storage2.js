document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('add_or_replace').addEventListener('click', function() {
        let storage = localStorage;
        let key = document.getElementById('key').value;
        let value = document.getElementById('value').value;
        if (key && value) {
            storage.setItem(key, value);
        } else {
            console.log('キーと値、両方を入力してください');
        }
    });
});