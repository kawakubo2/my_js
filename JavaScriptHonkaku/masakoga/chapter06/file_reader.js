document.addEventListener('DOMContentLoaded',function() {
    const read_file = () => {
        let inputs = document.getElementById('file').files;
        let input = null;
        if (inputs.length > 0) input = inputs[0]
        else return;
        let reader = new FileReader();
        reader.addEventListener('load', function() {
            document.getElementById('result').textContent = reader.result;
        });
        reader.addEventListener('abort', function() {
            console.log(reader.error.message);
        }, true);
        reader.readAsText(input, document.getElementById('charset').value);
        /*
         画像ファイルのloadを失敗させるためのメソッド
         reader.abort();
        */
    }
    document.getElementById('file').addEventListener('change', read_file);
    document.getElementById('charset').addEventListener('change', read_file);
});