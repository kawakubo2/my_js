fruits = [
    ["apple", 1000],
    ["orange", 1500],
    ["apple", 1000],
    ["banana", 2000],
    ["grape", 1800],
    ["orange", 800],
    ["banana", 1300],
    ["orange", 1300],
    ["apple", 700],
];

const fruitMap = new Map();
for (const fruit of fruits) {
    let [fruitName, price] = fruit;
    if (fruitMap.has(fruitName)) {
        fruitMap.set(fruitName, fruitMap.get(fruitName) + price);
    } else {
        fruitMap.set(fruitName, price);
    }
}

fruitMap.forEach((subtotal, fruitName) => {
    console.log(`${fruitName}: ${subtotal}`);
});