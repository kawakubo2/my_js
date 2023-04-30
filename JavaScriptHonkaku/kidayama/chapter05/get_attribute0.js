document.addEventListener('DOMContentLoaded', function() {
    const a = document.getElementById('amazon');
    a.addEventListener('mouseenter', function() {
        const url = a.href;
        const text = a.textContent;
        if (text === '日本アマゾン') {
            a.textContent = 'Amazon';
            a.href = 'https://www.amazon.com';
        } else {
            a.textContent = '日本アマゾン';
            a.href = 'https://www.amazon.co.jp';
        }
    });
});