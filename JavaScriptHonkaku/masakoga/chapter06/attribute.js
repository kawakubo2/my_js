document.addEventListener('DOMContentLoaded', function() {
    let logo = document.getElementById('logo');
    let attrs = logo.attributes;
    for (let i = 0, len = attrs.length; i < len; i++) {
        let attr = attrs.item(i);
        console.log(attr.name + ':' + attr.value);
    }
}, false);