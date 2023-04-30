document.addEventListener('DOMContentLoaded', () => {
    let timer = null;
    let result = document.getElementById('result');
    let start_btn = document.getElementById('start-btn');
    let stop_btn = document.getElementById('stop-btn');
    start_btn.disabled = false;
    stop_btn.disabled = true;
    start_btn.addEventListener('click', () => {
        start_btn.disabled = true;
        timer = window.setInterval(
            () => {
                let dat = new Date();
                result.textContent = dat.toLocaleTimeString();
            },
            1000
        );
        stop_btn.disabled = false;
    });
    stop_btn.addEventListener('click', () => {
        stop_btn.disabled = true;
        window.clearInterval(timer);
        start_btn.disabled = false;
    });
});