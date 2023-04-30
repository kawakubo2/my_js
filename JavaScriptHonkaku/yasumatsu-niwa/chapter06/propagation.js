document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('inner').addEventListener('click', event => {
        window.alert('#innerリスナーが発生しました。');
        event.stopImmediatePropagation();
        event.preventDefault();
    }, false);
    document.getElementById('inner').addEventListener('click', event => {
        window.alert('#innerリスナー2が発生しました。');
    }, false);
    document.getElementById('outer').addEventListener('click', event => {
        window.alert('#outerリスナーが発生しました。');
    }, false);
}, false);