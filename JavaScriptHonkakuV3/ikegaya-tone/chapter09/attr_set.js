document.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll('img');
    for (const img of imgs) {
        if (!img.hasAttribute('src')) {
            img.setAttribute('src', './images/noimage.jpg');
        }
    }
});