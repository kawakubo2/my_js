document.addEventListener('DOMContentLoaded', () => {
    const start = document.querySelector('#start_button');
    const stop = document.querySelector('#stop_button');
    const result = document.querySelector('#result');
    start.disabled = false;
    stop.disabled = true;

    function toggle() {
        start.disabled = !start.disabled;
        stop.disabled = !stop.disabled;
    }

    let timer = null;
    start.addEventListener('click', () => {
        toggle();
        timer = setInterval(
            () => {
                result.textContent = new Date().toLocaleTimeString();
            }, 1000
        );
    });

    stop.addEventListener('click', () => {
        toggle();
        clearInterval(timer);
    });

});