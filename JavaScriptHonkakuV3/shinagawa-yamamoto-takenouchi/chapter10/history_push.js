document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#btn');
    const result = document.querySelector('#result');
    let count = 0;

    btn.addEventListener('click', () => {
        result.textContent = ++count;
        history.pushState(count, '', `/shinagawa-yamamoto-takenouchi/chapter10/${count}`);
    });
    window.addEventListener('popstate', (e) => {
        count = e.state;
        result.textContent = count;
    })
});