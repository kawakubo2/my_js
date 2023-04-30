document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('toggle');
    const result = document.getElementById('result')
    let timer;
    let status = false; // タイマー起動中はtrue, タイマー停止中はfalse
    toggle.addEventListener('click', function() {
        if (status) {
            clearInterval(timer)
        } else {
            timer = setInterval(function() {
                let date = new Date();
                result.textContent = date.toLocaleTimeString();
            }, 1000);
        }
        status = !status;
        toggle.value = status ? '停止': '開始';
    });
});