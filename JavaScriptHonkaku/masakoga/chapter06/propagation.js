document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('inner').addEventListener('click', function() {
        alert('#innerリスナーが発生しました');
    }, true);
    document.getElementById('inner').addEventListener('click', function() {
        alert('#innerリスナー2が発生しました');
    }, true);
    document.getElementById('outer').addEventListener('click', function() {
        alert('#outerリスナーが発生しました');
    }, true);
});