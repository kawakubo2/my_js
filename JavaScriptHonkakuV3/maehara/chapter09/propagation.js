document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#inner').addEventListener('click', () => {
        alert('#innerリスナーが発生しました。');
    }, false);
    document.querySelector('#inner').addEventListener('click', () => {
        alert('#innerリスナー2が発生しました。');
    }, false);
    document.querySelector('#outer').addEventListener('click', () => {
        alert('#outerリスナーが発生しました。');
    }, false);
});