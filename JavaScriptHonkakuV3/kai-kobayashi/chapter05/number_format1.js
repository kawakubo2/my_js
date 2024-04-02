let num1 = 1234.567;
num1 = Math.floor(num1);
const japanese_fmt = new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY',
    currencyDisplay: 'symbol'
});

console.log(japanese_fmt.format(num1));

const num2 = 1234.567;
const gb_fmt = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
    currencyDisplay: 'symbol'
});

console.log(gb_fmt.format(num2));
