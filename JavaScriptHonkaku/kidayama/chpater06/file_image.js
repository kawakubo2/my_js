window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('file').addEventListener('change', event => {
        const input = document.getElementById('file').files[0];
        const reader = new FileReader();
        reader.addEventListener('load', event => {
            document.getElementById('result').src = reader.result;
        });
        reader.readAsDataURL(input);
    });
});