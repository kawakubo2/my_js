window.addEventListener('DOMContentLoaded', function() {

    document.getElementById('file').addEventListener('change', function() {
        let input = document.getElementById('file').files[0];
        let reader = new FileReader();
        reader.addEventListener('load', function() {
            document.getElementById('result').textContent = reader.result;
            let obj = document.createElement('object');
            obj.setAttribute('id', 'ABC');
            obj.setAttribute('classid', 'clsid:XYZ');
            let param = document.createElement('param');
            param.setAttribute('name', 'src');
            param.setAttribute('value', document.getElementById('select1').value);
            obj.appendChild(param);
            let pdf_div = document.getElementById('pdf');
            pdf_div.textContent = '';
            pdf.appendChild(obj);
        });
        reader.readAsText(input, document.getElementById('encoding').value);
    });
});