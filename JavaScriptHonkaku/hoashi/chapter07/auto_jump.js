document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');
    let count = 10;
    let timer = setInterval(() => {
        result.textContent = count--;
    }, 1000);
    setTimeout(() => {
        clearInterval(timer);
        location.href = 'https://haru-idea.jp';
    }, 11000);
});