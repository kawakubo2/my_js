document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#isbn').addEventListener('change', (e) => {
        location.href = `https://wings.msn.to/index.php/-/A-03/${e.target.value}`;
    })
});