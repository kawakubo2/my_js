let foods = document.getElementById('food');
let opts = foods.childNodes;
for (let i = 0, len = opts.length; i < len; i++) {
    let opt = opts.item(i);
    if (opt.nodeType === 1) {
        console.log(opt.value);
    }
}