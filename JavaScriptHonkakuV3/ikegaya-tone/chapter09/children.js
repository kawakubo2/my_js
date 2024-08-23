const s = document.querySelector('#food');
const opts = s.children;
for (const opt of opts) {
    console.log(opt.value);
}
console.log('---< 別解 >---');
const opts2 = document.querySelectorAll('#food > option');
opts2.forEach(opt => console.log(opt.value));
opts2.forEach(opt => console.log(opt.textContent));