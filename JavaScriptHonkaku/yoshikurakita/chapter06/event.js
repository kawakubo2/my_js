document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('elem').addEventListener('mousemove', event => {
        document.getElementById('result').textContent = `(${event.clientX}, ${event.clientY})`;
    }, false);
}, false);