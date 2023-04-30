const html = `<h1>見出し1</h1>
<h2>見出し2</h2>
<h3>見出し3</h3>
<header>ヘッダー</header>`;

const pattern = /<h[1-6]>(.+)<\/h[1-6]>/gi;

let result = html.matchAll(pattern);

for (let r of result) {
    console.log(r[1]);
}