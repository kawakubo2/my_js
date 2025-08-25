document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#inner').addEventListener('click', (e) => {
        console.log('#innerリスナーが発生しました。');
        e.stopImmediatePropagation();
    }, false);
    document.querySelector('#inner').addEventListener('click', (e) => {
        console.log('#innerリスナー2が発生しました。');
    }, false);
    document.querySelector('#outer').addEventListener('click', (e) => {
        console.log('#outerリスナーが発生しました。');
    }, false);
}, false);