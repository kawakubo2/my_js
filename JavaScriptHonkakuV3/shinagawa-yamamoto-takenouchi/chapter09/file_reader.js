document.addEventListener('DOMContentLoaded', () => {
    const file = document.querySelector('#file');
    const charset = document.querySelector('#charset');
    function loadText(file, charset) {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            document.querySelector('#result').textContent = reader.result;
        });
        reader.readAsText(file, charset);
    }
    document.querySelector('#btn').addEventListener('click', () => {
        loadText(file.files[0], charset.value);
    })
});