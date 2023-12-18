document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelectorAll('#list a');
    const pic  = document.querySelector('#pic');
    const del  = document.querySelector('#del');

    // TODO アンカー要素1個1個にイベントリスナを登録するのは効率が悪い
    for (const anchor of  list) {
        anchor.addEventListener('click', (e) => {
            const isbn = e.target.dataset.isbn; // e.target.getAttribute('data-isbn')と同じ
            if (isbn) {
                const img = document.createElement('img');
                img.src = `https://wings.msn.to/books/${isbn}/${isbn}.jpg`;
                img.alt = e.target.textContent
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