document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('list');
    const pic = document.getElementById('pic');
    const del = document.getElementById('del');

    list.addEventListener('click', event => {
        const isbn = event.target.getAttribute('data-isbn');

        if (isbn) {
            const img = document.createElement('img');
            img.src = 'https://www.wings.msn.to/books/' + isbn + '/' + isbn + '.jpg';
            img.alt = event.target.innerHMTL;
            img.height = 150;
            img.width = 108;
            if (pic.getElementsByTagName('img').length > 0) {
                pic.replaceChild(img, pic.lastChild);
            } else {
                del.disabled = false;
                pic.appendChild(img);
            }
        }
    });

    del.addEventListener('click', () => {
        pic.removeChild(pic.lastChild);
        del.disabled = true;
    })
});