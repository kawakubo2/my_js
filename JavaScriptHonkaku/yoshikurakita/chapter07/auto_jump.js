document.addEventListener('DOMContentLoaded', function() {
    let second = 10;
    const target = document.getElementById('target');
    let timer = setInterval(function() {
        target.textContent = --second;
    }, 1000);
    setTimeout(function() {
        clearInterval(timer);
        location.href = 'https://haru-idea.jp';
    }, 10000);
});