document.addEventListener('DOMContentLoaded', () => {
    const file = document.querySelector('#file');
    const charset = document.querySelector('#charset');
    function loadText(file, charset) {
        if (file){
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                document.querySelector('#result').textContent = reader.result;
            });
            reader.addEventListener('error', () => {
                console.log(reader.error.message);
            });
            reader.readAsText(file, charset);
        }
    }
    charset.addEventListener('change', () => {
        loadText(file.files[0], charset.value);
    })
    document.querySelector('#btn').addEventListener('click', () => {
        loadText(file.files[0], charset.value);
    })
});