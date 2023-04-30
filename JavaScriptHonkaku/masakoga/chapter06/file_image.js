document.addEventListener('DOMContentLoaded',function() {
    const read_file = () => {
        let input = document.getElementById('file').files[0];
        let reader = new FileReader();
        reader.addEventListener('load', function() {
            document.getElementById('result').src = reader.result;
        });
        reader.readAsDataURL(input);
    }
    document.getElementById('file').addEventListener('change', read_file);
});