const number = [ 5, -3, 1, 4, 12, 7, 8, -1, 6, 3 ];

const even_square_total = number
                            .filter(n => n % 2 === 0)
                            .map(n => n * n)
                            .reduce((total, n) => total + n);
console.log(even_square_total);

let total = 0;
for (const n of number) {
    if (n % 2 === 0 && n > 0) {
        total += n**2;
    }
}
console.log(total);

const dow = ['日', '月', '火', '水', '木', '金', '土'];

const dowStr = dow.map(w => w + '曜日')
    .reduce((result, s) => result + ", " + s);
console.log(dowStr);