document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#inner').addEventListener('click', (e) => {
        alert('#innerリスナが発生しました。');
        e.stopImmediatePropagation();
    }, false);
    document.querySelector('#inner').addEventListener('click', () => {
        alert('#inner2リスナが発生しました。');
    }, false);
    // document.querySelector('#other').addEventListener('click', () => {
    //     alert('#otherリスナが発生しました。');
    // }, false);
    document.querySelector('#outer').addEventListener('click', () => {
        alert('#outerリスナが発生しました。');
    }, false);
}, false);