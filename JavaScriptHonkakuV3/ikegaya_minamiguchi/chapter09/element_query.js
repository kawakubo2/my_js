const result = document.querySelector('#list a.external');
console.log(result.href);

console.log('--------------------------');

const result2 = document.querySelectorAll('#list a.external');
for (const r of result2) {
    console.log(`URL: ${r.href} サイト名: ${r.textContent}`);
}