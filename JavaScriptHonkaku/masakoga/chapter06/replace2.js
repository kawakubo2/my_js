document.addEventListener('DOMContentLoaded', function() {
    let list = document.getElementById('list');
    let pic = document.getElementById('pic');
    let del = document.getElementById('del');

    let pictures = new Set();

    list.addEventListener('click', function(e) {
        let isbn = e.target.getAttribute('data-isbn');
        if (pictures.has(isbn)) return;
        pictures.add(isbn);
        if (pic.childNodes.length >= 3) {
            pictures.delete(pic.firstChild.getAttribute('data-isbn'));
            pic.removeChild(pic.firstChild);
            // 宿題
            // pictures.delete(isbn);
        }
        if (isbn) {
            let img = document.createElement('img');
            img.src = 'http://www.wings.msn.to/books/' + isbn + '/' + isbn + '.jpg';
            img.alt = e.target.innerHTML;
            img.height = 150;
            img.width = 108;
            // 追加
            let src_attr = document.createAttribute('data-isbn')
            src_attr.value = isbn;
            img.setAttributeNode(src_attr);
            pic.appendChild(img);
            del.disabled = false;
        }
    }, false);
    del.addEventListener('click', function() {
        pic.textContent = '';
        del.disabled = true;
        pictures.clear();
    }, false);
}, false);