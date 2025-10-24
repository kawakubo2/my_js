document.addEventListener('DOMContentLoaded', () => {
    function movePage(e) {
        console.log(`${e.key} type: ${typeof e.key}`);
        if (e.key === 'd') {
            direction = 1;
        } else if (e.key === 'u') {
            direction = -1;
        }
        window.scrollBy(0, window.innerHeight * direction);
        e.stopImmediatePropagation();
    }
    document.querySelector('#key').addEventListener('keydown', (e) => {
        e.preventDefault();
        movePage(e);
    });
});