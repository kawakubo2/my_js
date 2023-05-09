document.addEventListener('DOMContentLoaded', () => {
    const attr = document.getElementById('attr');
    const image = document.getElementById('image01');
    attr.addEventListener('change', event => {
        const val = attr.value;
        image.setAttribute(val.split(',')[0], val.split(',')[1]);
    })
});