let fruits = {apple: 150, orange: 100, banana: 120 };

for (const fruit_name in fruits) {
    console.log(`${fruit_name}: ${fruits[fruit_name]}`);
}