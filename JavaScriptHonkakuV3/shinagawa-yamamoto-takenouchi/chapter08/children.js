const s = document.querySelector('#food');
console.log('--- 1 ---');
const opts = s.children;
for (const opt of opts) {
    console.log(opt.value);
}

console.log('--- 2 ---');
const opts2 = s.childNodes;
for (const opt of opts2) {
    if (opt.nodeType === 1) {
        console.log(opt.value);
    }
}

console.log('--- 3 ---');
let child = s.firstElementChild;
while (child) {
    console.log(child.value);
    child = child.nextElementSibling;
}