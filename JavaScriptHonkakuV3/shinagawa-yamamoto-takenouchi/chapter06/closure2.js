function fn1(tax) {
    return function(price) {
        return Math.floor(price * (1 + tax));
    }
}

const tax08 = fn1(0.08);
const tax10 = fn1(0.10);

console.log(tax08(1000));
console.log(tax10(3000));

const shopping_cart = [
    {category: 'おつまみ', price: 1000, name: 'かにかま'},
    {category: 'お酒', price: 3000, name: '大五郎'},
    {category: 'おつまみ', price: 3000, name: 'チーズ'},
    {category: 'お酒', price: 1380, name: '金麦'}
];
const taxes = new Map();
taxes.set("おつまみ", tax08);
taxes.set("お酒", tax10);

for (const item of shopping_cart) {
    console.log(`${item.name}の消費税込み金額は${taxes.get(item.category)(item.price)}円です。`)
}

