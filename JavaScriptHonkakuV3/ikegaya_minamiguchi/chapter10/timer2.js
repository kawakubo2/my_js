document.addEventListener('DOMContentLoaded', () => {
    const result = document.querySelector('#result');
    const startBtn = document.querySelector('#start');
    const stopBtn = document.querySelector('#stop');
    startBtn.disabled = false;
    stopBtn.disabled = true;

    let timer = null;

    function toggle() {
        startBtn.disabled = !startBtn.disabled;
        stopBtn.disabled = !stopBtn.disabled;
    }

    startBtn.addEventListener('click', () => {
        timer = window.setInterval(
            () => {
                result.textContent = (new Date()).toLocaleTimeString();
            },
            1000
        );
        toggle();
    });

    stopBtn.addEventListener('click', () => {
        window.clearInterval(timer);
        toggle();
    })
})