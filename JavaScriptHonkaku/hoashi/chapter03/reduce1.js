const number = [4, 3, 5, 1, 2];
console.log(number.filter(n => n % 2 === 0)
                .reduce((t, n) => t + n));

const wod = ['月', '火', '水'];
console.log(wod.map(w => w + "曜日").reduce((result, w) => result + "/" + w));

let s = [];
for (const w of wod) {
    s.push(w + "曜日");
}
console.log(s.join("/"));