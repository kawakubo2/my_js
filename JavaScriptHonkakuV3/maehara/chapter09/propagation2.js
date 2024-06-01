document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#inner').addEventListener('click', (e) => {
        alert('#innerリスナーが発生しました。');
        // e.stopImmediatePropagation();
        e.preventDefault();
    }, false);
    document.querySelector('#inner').addEventListener('click', () => {
        alert('#innerリスナー2が発生しました。');
    }, false);
    document.querySelector('#outer').addEventListener('click', () => {
        alert('#outerリスナーが発生しました。');
    }, false);
});