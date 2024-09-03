document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('#logo');
    const attrs = img.attributes;
    for (const attr of attrs) {
        console.log(`${attr.name}: ${attr.value}`);
    }
});
