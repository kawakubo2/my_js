document.addEventListener('DOMContentLoaded', () => {
    let count = 10;
    let timer;
    const result = document.getElementById('result');
    timer = window.setInterval(
        () => {
            result.textContent = count--;
        },
        1000
    );
    window.setTimeout(
        () => {
            window.clearInterval(timer);
            location.href="https://haru-idea.jp";
        },
        11000
    );
    console.log('ABC');
});