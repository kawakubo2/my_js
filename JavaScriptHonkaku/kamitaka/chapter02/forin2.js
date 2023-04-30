// forin2.js
const item_counter = { apple: 0, orange: 0, banana: 0 };
const sales = [
    { apple: 10, orange: 7, banana: 12 },
    { apple: 8, orange: 13, banana: 20 },
    { apple: 12, orange: 5, banana: 18 },
];

for (let daily_sales of sales) {
    for (let fruit in daily_sales) {
        item_counter[fruit] += daily_sales[fruit];
    }
}
for (let fruit in item_counter) {
    console.log(`${fruit}: ${item_counter[fruit]}個`);
}