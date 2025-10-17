document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#fm').addEventListener('submit', (e) => {
        if (!window.confirm('ページを送信してもよいですか？')) {
            e.preventDefault();
        }
    });
});