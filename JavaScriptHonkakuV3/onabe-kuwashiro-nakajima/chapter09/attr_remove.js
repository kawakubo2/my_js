document.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll('img');
    const deps = ['align', 'border', 'hspace', 'vspace', 'longdesc', 'name'];
    for (const img of imgs) {{
        for (const dep of deps) {
            img.removeAttribute(dep);
        }
    }}
});