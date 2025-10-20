document.addEventListener('DOMContentLoaded', () => {
    const result = document.querySelector('#result');
    const timer = window.setInterval(
        () => {
            result.textContent = (new Date()).toLocaleTimeString();
        },
        1000
    );
    document.querySelector('#btn').addEventListener('click', () => {
        window.clearInterval(timer);
    });
});