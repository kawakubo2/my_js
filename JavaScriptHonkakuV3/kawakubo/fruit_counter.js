const purchaseHistory = [
    { userId: 1, items: ["Apple", "Banana", "Orange"] },
    { userId: 2, items: ["Banana", "Apple", "Apple"] },
    { userId: 3, items: ["Banana", "Apple", "Orange", "Banana"] },
    { userId: 4, items: ["Orange", "Apple"] }
];

const fruit_counter = new Map();
purchaseHistory.map((fruit_obj) => fruit_obj.items)
                                .flat()
                                .map((f) => {
                                    fruit_counter.set(f, fruit_counter.has(f) ? fruit_counter.get(f) + 1: 1);
                                });

let max = 0;
for (const [fruit, number] of fruit_counter.entries()) {
    max = number > max ? number: max;
}


for (const [key, value] of fruit_counter.entries()) {
    if (value === max) {
        console.log(key, value);
    }
} 