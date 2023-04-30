document.addEventListener('DOMContentLoaded', function() {
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const result = document.getElementById('result');
    let timer;
    start.disabled = false;
    stop.disabled = true;
    start.addEventListener('click', function() {
        timer = setInterval(function() {
            result.textContent = new Date().toLocaleTimeString();
        }, 1000);
        start.disabled = true;
        stop.disabled = false;
    });
    stop.addEventListener('click', function() {
        clearInterval(timer);
        start.disabled = false;
        stop.disabled = true;
    });
    
});