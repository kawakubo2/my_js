document.addEventListener('DOMContentLoaded', () => {
    const previewFileContent = () => {
        const charset = document.getElementById('charset').value;
        const input = document.getElementById('file').files[0];
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            document.getElementById('result').textContent = reader.result;
        });
        reader.readAsText(input, charset);
    };
    document.getElementById('file').addEventListener('change', () => {
        previewFileContent();
    });
    document.getElementById('charset').addEventListener('change', () => {
        previewFileContent();
    });
});