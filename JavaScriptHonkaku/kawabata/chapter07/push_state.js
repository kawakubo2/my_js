document.addEventListener('DOMContentLoaded', function() {
    let count = 0;
    let result = document.getElementById('result');

    document.getElementById('btn').addEventListener('click', function() {
        result.textContent = ++count;
        history.pushState(count, null, '/JavaScriptHonkaku/kawabata/chapter07/push_state.html');
    });

    window.addEventListener('popstate', function(e) {
        count = e.state;
        result.textContent = count;
    });
});