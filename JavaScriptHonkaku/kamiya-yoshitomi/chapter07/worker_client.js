document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', () => {
        let worker = new Worker('scripts/worker.js');

        worker.postMessage({
            'target': document.getElementById('target').value,
            'x': document.getElementById('x').value
        });

        document.getElementById('result').textContent = '計算中...';

        worker.addEventListener('message', event => {
            document.getElementById('result').textContent = event.data;
        }, false);

        worker.addEventListener('error', evnet => {
            document.getElementById('result').textContent = e.message;
        }, false); 
    }, false);
}, false);