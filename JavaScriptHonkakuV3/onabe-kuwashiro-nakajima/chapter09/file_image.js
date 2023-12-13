document.addEventListener('DOMContentLoaded', () => {
    const reader = new FileReader();

    const file = document.querySelector('#file');

    reader.addEventListener('load', () => {
        document.querySelector('#result').src = reader.result;
    });
    file.addEventListener('change', () => {
        reader.readAsDataURL(file.files[0]);
    });
});