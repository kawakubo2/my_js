const fruits = ["banana", "apple", "orange", "grape"]

// 繰り返し
for (const fruit of fruits) {
    // 条件分岐
    if (fruit.startsWith("b") || fruit.startsWith("o")) {
        console.log(fruit)
    }
}