document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    const result = document.querySelector('#result');
    document.querySelector('#btn').addEventListener('click', () => {
        result.textContent = ++count;
        history.pushState(count, '', `/my_js/JavaScriptHonkakuV3/maehara/chapter10/${count}`)
    });
    window.addEventListener('popstate', (e) => {
        count = e.state;
        result.textContent = count;
    });
});