const s = document.querySelector('#food');
const opts = s.children;
for (const opt of opts) {
    console.log(opt.value);
}