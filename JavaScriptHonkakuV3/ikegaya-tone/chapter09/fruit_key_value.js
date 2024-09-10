// 本来は外部から取得する
const fruits = {banana: 'バナナ', apple: 'リンゴ', orange: 'オレンジ',
                grape: 'ブドウ', strawberry: 'イチゴ'};

for (const fruit_en in fruits) {
    console.log(`${fruit_en}: ${fruits[fruit_en]}`);
}
