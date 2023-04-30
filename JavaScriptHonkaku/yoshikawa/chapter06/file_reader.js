const read_file = (input, encoding) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        document.getElementById('result').textContent = reader.result;
    }, true);
    reader.readAsText(input, encoding);
};

document.addEventListener('DOMContentLoaded', () => {
    let input_file;
    const input = document.getElementById('file');
    const encoding = document.getElementById('encoding');
    input.addEventListener('change', () => {
        input_file = input.files[0];
        read_file(input_file, encoding.value);
    });
    encoding.addEventListener('change', () => {
        if (input_file)
            read_file(input_file, encoding.value);
    });
});