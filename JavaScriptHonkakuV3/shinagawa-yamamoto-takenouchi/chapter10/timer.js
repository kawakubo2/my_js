document.addEventListener('DOMContentLoaded', () => {
    const result = document.querySelector('#result');
    let timer = setInterval(
        () => {
            const time = new Date();
            result.textContent = time.toLocaleTimeString();
        }, 1000
    );
    document.querySelector('#btn').addEventListener('click', () => {
        clearInterval(timer);
    })
});