function intersect(set1, set2) {
    const result = new Set();
    for (const elem of set1) {
        if (set2.has(elem)) result.add(elem);
    }
    return result;
}

document.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll('img');
    const deps = new Set(['align', 'border', 'hspace', 'vspace', 'longdesc', 'name']);
    for (const img of imgs) {
        const attrs = new Set([...img.attributes].map(attr => attr.name));
        console.log(attrs);
        const targets = intersect(attrs, deps);
        for (const target of targets) {
            img.removeAttribute(target)
        }
    }    
});