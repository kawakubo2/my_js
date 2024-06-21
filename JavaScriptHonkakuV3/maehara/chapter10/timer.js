document.addEventListener('DOMContentLoaded', () => {
    const result = document.querySelector('#result');

    const timer = window.setInterval(
        function() {
            result.textContent = (new Date()).toLocaleTimeString();
        },
        1000
    )

    document.querySelector('#btn').addEventListener('click', function() {
        window.clearInterval(timer);
    });
});