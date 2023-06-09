document.addEventListener('DOMContentLoaded', function() {
    let list = document.getElementById('list');
    let pic = document.getElementById('pic');
    let del = document.getElementById('del');

    list.addEventListener('click', function(e) {
        let isbn = e.target.getAttribute('data-isbn');

        if (isbn) {
            let img = document.createElement('img');
            img.src = 'http://www.wings.msn.to/books/' + isbn + '/' + isbn + '.jpg';
            img.alt = e.target.innerHTML;
            img.height = 150;
            img.width = 108;
            if (pic.getElementsByTagName('img').length > 0) {
                pic.replaceChild(img, pic.lastChild);
            } else {
                del.disabled = false;
                pic.appendChild(img);
            }
        }
    }, false);
    del.addEventListener('click', function() {
        pic.removeChild(pic.lastChild);
        del.disabled = true;
    }, false);
}, false);