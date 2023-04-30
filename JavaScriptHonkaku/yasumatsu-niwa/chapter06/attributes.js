document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo');
    const attrs = logo.attributes;
    for (const attr of attrs) {
        console.log(`${attr.name}: ${attr.value}`);
    }
});