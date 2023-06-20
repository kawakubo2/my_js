document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fm').addEventListener('submit', event => {
        if (!window.confirm('ページを送信して良いですか?')) {
            event.preventDefault();
        }
    });
});