function sum(...nums) {
    let result = 0;
    for (const num of nums) {
        if (typeof num !== 'number') {
            throw new Error('指定値が数値ではありません: ' + num);
        }
        result += num;
    }
    return result;
}

try {
    console.log(sum(1, 3, 5, 7, 9));
} catch(e) {
    console.log(e.message);
}