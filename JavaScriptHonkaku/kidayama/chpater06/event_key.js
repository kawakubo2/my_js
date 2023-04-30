document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('key').addEventListener('keydown', function(e) {
        console.log(`キー: ${e.key}: キーコード: ${e.keyCode}`);
    });
});