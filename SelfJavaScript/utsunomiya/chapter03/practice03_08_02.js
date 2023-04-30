const TAX_RATE = 1.1;
let productPrice = 1000;

console.log('商品の価格は' + productPrice + '円ですので、税込金額は' +
    Math.floor(productPrice * TAX_RATE) + '円です。');
console.log(`商品の価格は${productPrice}円ですので、税込金額は${Math.floor(productPrice * TAX_RATE)}円です。`);