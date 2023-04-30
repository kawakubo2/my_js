document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fm').addEventListener('submit', event => {
        if (!confirm('ページを送信しても良いですか？')) {
            event.preventDefault();
        }
    });
});