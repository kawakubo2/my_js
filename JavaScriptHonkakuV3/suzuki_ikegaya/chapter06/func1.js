/*
税抜き金額を引数として取り、8%の全額を返す。
小数点は切り捨てるものとする
*/
function calcTax(price) {
    return Math.floor(price * 0.8);
}

const prices = [1000, 500, 80, 2000];
for (const price of prices) {
    console.log(`${price}の8%の消費税額は${calcTax(price)}`);
}