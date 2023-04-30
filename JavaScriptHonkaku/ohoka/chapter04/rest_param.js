function sum(...nums) {
    let result = 0;
    for (let num of nums) {
        if (typeof num !== 'number') {
            throw new Error("指定値が数値ではありません。");
        }
        result += num;
    }
    return result;
}

try {
    console.log(sum(1, 3, 5, 7, 9));
    console.log(sum(...[2, 4, 6, 8, 10]));
} catch (e) {
    alert(e.message);
}