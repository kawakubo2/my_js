document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelectorAll('#list a');
    const pic  = document.querySelector('#pic');
    const del  = document.querySelector('#del');

    for (const li of list) {
        li.addEventListener('click', (e) => {
            const isbn = e.target.dataset.isbn;
            if (isbn) {
                const img = document.createElement('img');
                img.src = `https://wings.msn.to/books/${isbn}/${isbn}.jpg`;
                img.alt = e.target.textContent;
                img.height = 150;
                img.width = 108;
                if (pic.querySelector('img')) {
                    pic.replaceChild(img, pic.lastChild);
                } else {
                    del.disabled = false;
                    pic.append(img);
                }
            }
        });
    }

    del.addEventListener('click', () => {
        pic.removeChild(pic.lastChild);
        del.disabled = true;
    })
});