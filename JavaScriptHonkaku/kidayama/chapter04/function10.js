const sales = [
    {name: 'バナナ', quantity: 5},
    {name: 'イチゴ', quantity: 20},
    {name: 'バナナ', quantity: 10},
    {name: 'バナナ', quantity: 20},
    {name: 'ブドウ', quantity: 12},
    {name: 'バナナ', quantity: 30},
    {name: 'ブドウ', quantity: 18},
    {name: 'リンゴ', quantity: 13},
    {name: 'バナナ', quantity: 10},
    {name: 'リンゴ', quantity: 17},
];

function fruit_counter(fruit_sales) {
    const counter = new Map();
    for (const item of fruit_sales) {
        if (counter.has(item['name'])) {
            counter.set(item['name'], counter.get(item['name']) + item['quantity']);
        } else {
            counter.set(item['name'], item['quantity']);
        }
    }
    return counter;
}

console.log(fruit_counter(sales));