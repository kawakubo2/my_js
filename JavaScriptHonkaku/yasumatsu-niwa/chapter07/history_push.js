document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    const result = document.getElementById('result');
    document.getElementById('btn').addEventListener('click', () => {
        result.textContent = ++count;
        history.pushState(count, '/JavaScriptHonkaku/yasumatsu-niwa/chapter07/count/' + count);
    });
});

window.addEventListener('popstate', event => {
    count = event.state;
    result.textContent = count;
})