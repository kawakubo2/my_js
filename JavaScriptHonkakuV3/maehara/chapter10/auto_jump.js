document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('#target');
    let timer;
    let counter = 10;
    timer = setInterval(function() {
        target.textContent = --counter;
    }, 1000);

    setTimeout(function() {
        clearInterval(timer);
        location.href = "https://haru-idea.jp";
    }, 10000);
})