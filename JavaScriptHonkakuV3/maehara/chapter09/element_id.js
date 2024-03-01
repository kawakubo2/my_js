let timer = setInterval(() => {
    const current = new Date();
    const result = document.getElementById('result');
    result.textContent = current.toLocaleString();
}, 1000);
const stop_button = document.getElementById('stop-timer');
stop_button.addEventListener('click', () => {
    clearInterval(timer);
});