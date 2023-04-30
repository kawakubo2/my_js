const s = document.getElementById('food');
const opts = s.childNodes;
for (let i = 0, len = opts.length; i < len; i++) {
    if (opts[i].nodeType === 1) {
        console.log(opts[i].value);
    }
}