document.addEventListener('DOMContentLoaded', () => {
    const file = document.querySelector('#file');
    const charset = document.querySelector('#charset');
    const btn = document.querySelector('#btn');
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        document.querySelector('#result').textContent = reader.result;
    });
    function loadText() {
        reader.readAsText(file.files[0], charset.value);
    }
    btn.addEventListener('click', () => {
        loadText();
    });
    charset.addEventListener('change', () => {
        loadText();
    });
});