document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('isbn').addEventListener('change', event => {
        location.href = 'http://www.wings.msn.to/index.php/-/A-03/' + event.target.value;
    })
});