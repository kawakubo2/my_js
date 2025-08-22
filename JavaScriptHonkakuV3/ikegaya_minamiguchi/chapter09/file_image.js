document.addEventListener('DOMContentLoaded', () => {
    const file = document.querySelector('#file');
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        document.querySelector('#result').src = reader.result;
    });

    file.addEventListener('change', () => {
        reader.readAsDataURL(file.files[0]);
    });
});