const fruits = ['banana', 'apple', 'banana', 'orange', 'apple',
                'banana', 'grape', 'banana', 'apple', 'grape' ];

const fruit_counter =  new Map();

for (const f of fruits) {
    if (fruit_counter.has(f)) { // hasメソッドはキーが存在するかを判定。存在すればtrue、しなければfalse
        fruit_counter.set(f, fruit_counter.get(f) + 1); // キーが同じ場合は値を上書きする
    } else {
        fruit_counter.set(f, 1); // setメソッドはキーと値をMapにセットする
    }
}

for (const [fruit, num] of fruit_counter.entries()) {
    console.log(`${fruit}: ${num}`);
}