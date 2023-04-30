window.addEventListener('DOMContentLoaded', function() {

    const read_text = () => {
        let input = document.getElementById('file').files[0];
        let reader = new FileReader();
        reader.addEventListener('load', function() {
            document.getElementById('result').textContent = reader.result;
        });
        reader.readAsText(input, document.getElementById('encoding').value);
    };



    document.getElementById('file').addEventListener('change', read_text);
    document.getElementById('encoding').addEventListener('change', read_text);
});