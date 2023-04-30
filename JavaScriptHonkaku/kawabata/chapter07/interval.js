

document.addEventListener('DOMContentLoaded', function() {
    let start_button = document.getElementById('start_button');
    let stop_button = document.getElementById('stop_button');
    let result = document.getElementById('result');

    const start_stop_toggle = () => {
        start_button.disabled = !start_button.disabled;
        stop_button.disabled = !stop_button.disabled;
    }

    start_button.disabled = false;
    stop_button.disabled = true;

    let timer;
    start_button.addEventListener('click', function() {
        timer = window.setInterval(
            function() {
                let dat = new Date();
                result.textContent = dat.toLocaleTimeString();
            },
            1000
        );
        start_stop_toggle();
    });

    stop_button.addEventListener('click', function() {
        window.clearInterval(timer);
        start_stop_toggle();
    });
});