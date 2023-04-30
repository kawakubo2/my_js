const readFile = (name, charset) => {
    const input = document.getElementById(name).files[0];
    const reader = new FileReader();
    reader.addEventListener('load', function() {
        document.getElementById('result').textContent = reader.result;
    });
    reader.readAsText(input, charset);
}
window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('file').addEventListener('change', function() {
        const charset = document.getElementById('charset').value;
        readFile('file', charset);
    });
    document.getElementById('charset').addEventListener('change', function() {
        const charset = document.getElementById('charset').value;
        readFile('file', charset);
    });
});