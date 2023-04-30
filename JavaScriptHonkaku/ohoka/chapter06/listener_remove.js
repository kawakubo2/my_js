document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('btn');
    const toggle = document.getElementById('toggle');
    let isInAlert = false;
    const listener = () => {
        alert('こんにちは、世界！');
    };
    toggle.addEventListener('click', function() {
        if (isInAlert) {
            btn.removeEventListener('click', listener, false);
            toggle.value = 'イベントリスナ登録';
            console.log('イベントリスナ解除');
        } else {
            btn.addEventListener('click', listener, false);
            toggle.value = 'イベントリスナ解除';
            console.log('イベントリスナ登録');
        }
        isInAlert = !isInAlert;

    }, false);
});