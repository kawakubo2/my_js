window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('file').addEventListener('change', e => {
        const input = document.getElementById('file').files[0];
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            document.getElementById('result').src = reader.result;
        }, true);
        reader.readAsDataURL(input);
    }, true);
});