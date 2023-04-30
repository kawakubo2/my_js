document.addEventListener('DOMContentLoaded', () => {
    const start = document.getElementById('start');
    const stop  = document.getElementById('stop');
    start.disabled = false;
    stop.disabled = true;
    let timer;
    start.addEventListener('click', () => {
        start.disabled = true;
        stop.disabled = false;
        timer = window.setInterval(
            () => {
                const date = new Date();
                document.getElementById('result').textContent = date.toLocaleTimeString();

            }, 1000);
    });
    stop.addEventListener('click', () => {
        start.disabled = false;
        stop.disabled = true;
        window.clearInterval(timer);
    });
});