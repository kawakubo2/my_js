const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const result = document.getElementById('result');

startButton.disabled = false;
stopButton.disabled = true;

let timer;
startButton.addEventListener('click', function() {
    timer = setInterval(() => {
        const time = new Date();
        result.textContent = time.toLocaleTimeString();
    }, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
});
stopButton.addEventListener('click', function() {
    clearInterval(timer);
    startButton.disabled = false;
    stopButton.disabled = true;
});

