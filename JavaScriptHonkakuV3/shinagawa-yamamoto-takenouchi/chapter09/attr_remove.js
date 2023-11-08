document.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll('img');
    let deps = ['align', 'border', 'hspace', 'vspace', 'longdesc', 'name'];
    for (let img of imgs) {
        printAttributes(img);
        for (let dep of deps) {
            img.removeAttribute(dep);
        }
    }

    function printAttributes(elem) {
        const attrs = elem.attributes;
        for (const attr of attrs) {
            console.log(`${attr.name}: ${attr.value}`);
        }
    }
});
