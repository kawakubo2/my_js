document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        let name = document.getElementById('name');
        let url  = document.getElementById('url');

        let anchor = document.createElement('a');
        anchor.href = url.value;
        anchor.target = '_blank';
        let text = document.createTextNode(name.value);
        anchor.appendChild(text);
        let br = document.createElement('br');
        let list = document.getElementById('list');
        list.appendChild(anchor);
        list.appendChild(br);
        name.value = '';
        url.value = '';
        name.focus();
    }, false);
}, false);