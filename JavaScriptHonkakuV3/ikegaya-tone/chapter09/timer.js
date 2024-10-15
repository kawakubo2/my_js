document.addEventListener('DOMContentLoaded', () => {
    const result = document.querySelector('#result');
    const start = document.querySelector('#start');
    const stop = document.querySelector('#stop');

    // タイマーのidを格納
    // clearIntervalを使って削除すること
    let timer = null;
    
    // タイマーが停止しているときは、開始ボタンだけがクリック出来る状態、
    // 終了ボタンはクリックできないようにする。
    // タイマーが開始しているときは、終了ボタンだけがクリック出来る状態、
    // 開始ボタンはクリックできないようにする。
    start.disabled = false;
    stop.disabled = true;

    const toggleState = () => {
        start.disabled = !start.disabled;
        stop.disabled = !stop.disabled;
    }

    start.addEventListener('click', () => {
        timer = window.setInterval(
            function() {
                result.textContent = new Date().toLocaleTimeString();
            },
            1000
        )
        toggleState();
    });

    stop.addEventListener('click', () => {
        window.clearInterval(timer);
        toggleState();
    });
});