window.onload = function() {
    const btn = document.getElementById('btn');
    const del = document.getElementById('delete');

    btn.onclick = function() {
        alert('こんにちは、世界！');
    };

    del.onclick = function() {
        btn.onclick = null;
    }
}