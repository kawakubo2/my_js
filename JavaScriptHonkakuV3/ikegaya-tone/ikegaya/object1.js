const fruitCounter = new Map(); // {"banane": 4, "apple": 3, "grape": 2, "melon": 1, ...}

const fruits = ["banana", "apple", "grape", "melon", "banana",
                "apple", "watermelon", "banana", "pear", "apple",
                "orage", "banana", "grape"];

for (const fruit of fruits) {
    if (!fruitCounter.has(fruit)) {
        fruitCounter.set(fruit, 0);
    }
    fruitCounter.set(fruit, fruitCounter.get(fruit) + 1);
}

for (const [fruit, number] of fruitCounter.entries()) {
    console.log(`${fruit}: ${number}`);
}




