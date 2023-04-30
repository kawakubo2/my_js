const orders = [
    ["八宝菜", 1, 600],
    ["餃子", 4, 200],
    ["回鍋肉", 1, 500],
    ["青椒肉絲", 2, 700]
];

console.log(orders);
console.log("回鍋肉の注文を取り消す");
const newOrders = orders.filter(order => order[0] !== "回鍋肉");
console.log(newOrders);

const lessThan1000 = true;
for (const order of orders) {
    if (order[2] >= 1000) {
        lessThan1000 = false;
        break;
    }
}
console.log(`すべての商品は1000より安${lessThan1000 ? "いです。": "くありません。"}`);

const lessThan1000flag = orders.every(order => order[2] < 1000);
console.log(`すべての商品は1000より安${lessThan1000flag ? "いです。": "くありません。"}`);

orders.sort((o1, o2) => {
    return (o2[1] * o2[2]) - (o1[1] * o1[2])
});

console.log(orders);

orders.forEach(order => console.log(`${order[0]}を${order[2]}円で${order[1]}個注文しました。`));

const totalPrice = orders
                    .map(order => order[1] * order[2])
                    .reduce((total, price) => total + price);

console.log(`合計金額は${totalPrice}円です。`);