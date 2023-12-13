document.addEventListener('DOMContentLoaded', () => {
    const file = document.querySelector('#file');
    const charset = document.querySelector('#charset');
    let encoding = 'UTF-8';
    charset.addEventListener('change', () => {
        encoding = charset.value;
    });
    function readText(file, encoding) {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            document.querySelector('#result').textContent = reader.result;
        });
        reader.readAsText(file, encoding);
    }
    document.querySelector('#btn').addEventListener('click', () => {
        readText(file.files[0], encoding);
    });
});