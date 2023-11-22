const result = document.querySelectorAll('#list .external');
for (const r of result) {
    console.log(r.href);
}
const abcPs = document.querySelectorAll('#abc > p');
for (const a of abcPs) {
    a.style.border = '3px solid blue';
}
const xyzPs = document.querySelectorAll('#xyz > p');
for (const x of xyzPs) {
    x.style.backgroundColor = 'aquamarine';
}

const ps = document.getElementsByTagName('p');
for (const p of ps) {
    p.style.color = 'red';
}
const wwws = document.getElementsByClassName('www');
for (const w of wwws) {
    w.style.padding = '0.5rem';
}