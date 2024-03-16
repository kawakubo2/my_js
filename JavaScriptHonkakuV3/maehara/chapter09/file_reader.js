document.addEventListener('DOMContentLoaded', () => {
    const file = document.querySelector('#file');
    const reader = new FileReader();
    const charset = document.querySelector('#charset');

    function readTextFile(file, charset) {
        reader.addEventListener('load', () => {
            document.querySelector('#result').textContent = reader.result;
        });
        reader.readAsText(file.files[0], charset);
    }
    file.addEventListener('change', () => {
        readTextFile(file, charset.value);
    });
    charset.addEventListener('change', () => {
        readTextFile(file, charset.value);
    })
})