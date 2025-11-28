document.addEventListener('DOMContentLoaded', () => {
    const target = document.querySelector('#target');
    const x = document.querySelector('#x');
    const result = document.querySelector('#result');

    document.querySelector('#btn').addEventListener('click', () => {
        const worker = new Worker("scripts/worker.js");
        worker.postMessage({
            target: target.value,
            x: x.value
        });
        result.textContent = '計算中...';

        worker.addEventListener('message', (e) => {
            result.textContent = e.data;
        });
        worker.addEventListener('error', (e) => {
            result.textContent = e.message;
        });
    })
})