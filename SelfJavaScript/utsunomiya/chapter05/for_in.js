const fruits = { apple: 'りんご', banana: 'バナナ', orange: 'オレンジ' };

for (let key in fruits) {
    console.log(`キー[${key}] 値:[${fruits[key]}]`);
}