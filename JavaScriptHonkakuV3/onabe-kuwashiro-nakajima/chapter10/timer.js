document.addEventListener('DOMContentLoaded', () => {
    const result = document.querySelector('#result');
    let timer = window.setInterval(() => {
        result.textContent = (new Date()).toLocaleTimeString();
    }, 5000);

    document.querySelector('#btn').addEventListener('click', () => {
        window.clearInterval(timer);
    })
});






