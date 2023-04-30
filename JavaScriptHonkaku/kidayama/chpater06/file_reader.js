window.addEventListener('DOMContentLoaded', function() {
    let charset = 'UTF-8';
    const readText = () => {
        const input = document.getElementById('file').files[0];
        const reader = new FileReader();
        reader.addEventListener('load', function() {
            document.getElementById('result').textContent = reader.result;
        });
        reader.readAsText(input, charset);
    };
    document.getElementById('file').addEventListener('change', function() {
        readText();
    });
    document.getElementById('charset').addEventListener('change', () => {
        charset = document.getElementById('charset').value;
        readText();
    });
});