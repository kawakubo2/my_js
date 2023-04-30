document.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('logo');
    const attrs = logo.attributes;
    for (let i = 0, len = attrs.length; i < len; i++) {
        const attr = attrs.item(i);
        console.log(attr.name + ':' + attr.value);
    }
});