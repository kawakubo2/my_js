window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('storage', (e) => {
        document.querySelector('#storage-key').textContent = e.key;
        document.querySelector('#storage-before-value').textContent = e.oldValue;
        document.querySelector('#storage-after-value').textContent = e.newValue;
        document.querySelector('#source-url').textContent = e.url;
    });
});