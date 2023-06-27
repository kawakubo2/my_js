window.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    const result = document.getElementById('result');
    document.getElementById('btn').addEventListener('click', () => {
        result.textContent = ++count;
        history.pushState(count, null, '/JavaScriptHonkaku/hoashi/chapter07/' + count);
    });
    window.addEventListener('popstate', e => {
        count = e.state;
        result.textContent = count;
    });
});
