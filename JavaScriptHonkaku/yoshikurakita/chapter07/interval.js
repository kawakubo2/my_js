document.addEventListener('DOMContentLoaded', function() {
    const start = document.getElementById('start');
    const stop  = document.getElementById('stop');
    const result = document.getElementById('result')
    let timer;
    start.addEventListener('click', function() {
        start.disabled = true;
        stop.disabled = false;
        timer = setInterval(function() {
            let date = new Date();
            result.textContent = date.toLocaleTimeString();
        }, 1000);
    });
    stop.addEventListener('click', function() {
        start.disabled = false;
        stop.disabled = true;
        clearInterval(timer);
    });
});