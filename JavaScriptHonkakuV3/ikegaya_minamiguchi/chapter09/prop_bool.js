document.addEventListener('DOMContentLoaded', () => {
    const els = document.querySelectorAll('input[type="text"]');
    for(const el of els) {
        console.log(`${el.name}= ${el.disabled} / ${el.getAttribute('disabled')}`);
    }
    document.querySelector('#enable_btn').addEventListener('click', () => {
        // els.forEach(elem => elem.disabled = false);
        for (const el of els) {
            el.disabled = false;
        }
    });
});