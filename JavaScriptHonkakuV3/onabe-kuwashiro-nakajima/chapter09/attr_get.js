document.addEventListener('DOMContentLoaded', (e) => {
    const img = document.querySelector('#logo');
    const select = document.querySelector('#attr');
    const attrs = img.attributes;
    for (const attr of attrs) {
        const option = document.createElement('option');
        // option.value = attr.name
        option.setAttribute('value', attr.name);
        const text = document.createTextNode(attr.name);
        option.appendChild(text);
        select.append(option);
    }
    select.addEventListener('change', e => {
        console.log(img.getAttribute(e.target.value));
    });
});