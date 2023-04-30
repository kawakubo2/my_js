const sum = (...nums) => {
    let result = 0;
    for (const num of nums) {
        if (typeof num !== 'number') {
            throw new TypeError('指定値が数値ではありません。');
        }
        result += num;
    }
    return result;
}

try {
    console.log(sum(1, 3, 5, 7, 9));
    // console.log(sum(1, 3, 'a', 7, 9));
    const numbers = [1, 2, 3, 4, 5];
    console.log(sum(...numbers)); // ...をスプレッド演算子と呼ぶ
} catch(e) {
    console.log(e.message);
}