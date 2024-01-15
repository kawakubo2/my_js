document.addEventListener('DOMContentLoaded', () => {
    const inner = document.querySelector('#inner');
    const outer = document.querySelector('#outer');

    inner.addEventListener('click', (e) => {
        window.alert('#innerリスナが発生しました。');
        // e.stopPropagation();
        e.stopImmediatePropagation();
    }, false);
    inner.addEventListener('click', () => {
        window.alert('#innerリスナ2が発生しました。');
    }, false);
    outer.addEventListener('click', () => {
        window.alert('#outerリスナが発生しました。');
    }, false);
});