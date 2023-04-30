const s = document.getElementById('food');
const opts = s.childNodes;

for (let i = 0, len = opts.length; i < len; i++) {
    const opt = opts.item(i);
    if (opt.nodeType === 1) {
        console.log(opt.value);
    }
}