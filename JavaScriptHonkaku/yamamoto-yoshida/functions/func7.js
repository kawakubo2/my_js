const sales = [
    {'banana': 5000, 'apple': 2800, 'orage': 4200, 'grape': 6200 },
    {'banana': 3400, 'apple': 3200, 'orage': 1800, 'grape': 4800, 'pear': 3000 },
    {'banana': 4800, 'apple': 4000,                'grape': 4000 },
    {'banana': 7600, 'apple': 4800, 'orage': 3300, 'grape': 3800 },
    {'banana': 6100, 'apple': 2500, 'orage': 3800, 'grape': 4500 },
    {'banana': 5300, 'apple': 2300, 'orage': 1500, 'grape': 5200 },
];

/*
    { 'banana': xxxx, 'apple': yyyy, .... 'grape': zzz }
*/

function calc_sales(sales) {
    const result = new Map();
    for (const s of sales) {
        for (let fruit in s) {
            if (result.has(fruit)) {
                result.set(fruit, result.get(fruit) + s[fruit]);
            } else {
                result.set(fruit, s[fruit]);
            }
        }
    }
    return result;
}

const weekly_summary = calc_sales(sales);

for (let [fruit, price] of weekly_summary) {
    console.log(`${fruit}: ${price}`);
}