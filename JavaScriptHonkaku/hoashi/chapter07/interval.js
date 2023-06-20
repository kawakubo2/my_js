document.addEventListener('DOMContentLoaded', () => {
    let timer = window.setInterval(
        () => {
            const dat = new Date();
            document.getElementById('result').textContent = dat.toLocaleTimeString();
        },
        1000
    )
});

document.getElementById('btn').addEventListener('click', () => window.clearInterval(timer));