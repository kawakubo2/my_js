document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('key').addEventListener('keydown', event => {
        console.log(`キー: ${event.key} キーコード: ${event.keyCode}`);
    });
});