document.addEventListener('DOMContentLoaded', () => {
    const file = document.querySelector('#file');
    const charset = document.querySelector('#charset');
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        document.querySelector('#result').textContent = reader.result;
    });

    document.querySelector('#btn').addEventListener('click', () => {
        reader.readAsText(file.files[0], charset.value);
    });

    charset.addEventListener('change', () => {
        reader.readAsText(file.files[0], charset.value)
    })
});