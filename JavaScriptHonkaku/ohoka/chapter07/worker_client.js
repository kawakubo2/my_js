document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        const worker = new Worker('scripts/worker.js');

        worker.postMessage({
            'target': document.getElementById('target').value,
            'x': document.getElementById('x').value
        });
        document.getElementById('result').textContent = '計算中...';

        worker.addEventListener('message', function(e) {
            document.getElementById('result').textContent = e.data;
        });

        worker.addEventListener('error', function(e) {
            document.getElementById('result').textContent = e.message;
        }, false);
    }, false);
}, false);