const read_text = () => {
    const input = document.getElementById('file').files[0];
    const charset = document.getElementById('charset').value;
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        document.getElementById('result').textContent = reader.result;
    });
    reader.readAsText(input, charset);
}
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('file').addEventListener('change', () => {
        read_text()
    });
    document.getElementById('charset').addEventListener('change', () => {
        read_text();
    });
});