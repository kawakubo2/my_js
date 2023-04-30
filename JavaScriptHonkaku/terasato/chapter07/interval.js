const toggleState = (startButton, stopButton) => {
    startButton.disabled = !startButton.disabled;
    stopButton.disabled = !stopButton.disabled;
};

document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start');
    const stopButton  = document.getElementById('stop');
    const result      = document.getElementById('result');
    startButton.disabled = false;
    stopButton.disabled = true;
    let timer;
    startButton.addEventListener('click', function() {
        timer = setInterval(
            function() {
                result.textContent = new Date().toLocaleTimeString();
            },
            1000
        );
        toggleState(startButton, stopButton);
    });
    stopButton.addEventListener('click', function() {
        clearInterval(timer);
        toggleState(startButton, stopButton);
    });
});