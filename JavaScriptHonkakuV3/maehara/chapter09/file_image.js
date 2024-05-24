document.addEventListener('DOMContentLoaded', function() {
    const file = document.querySelector('#file');
    const reader = new FileReader();

    reader.addEventListener('load', function() {
        document.querySelector('#result').src = reader.result;
    });

    file.addEventListener('change', function() {
        reader.readAsDataURL(file.files[0]);
    });
});