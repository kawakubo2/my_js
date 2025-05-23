/*
引数として数値型の配列を受け取り、
その最大値を求め返す関数

[5, 13, 99, 85, -50, 57, 33] ---> 99
*/
const array_sum = (numbers) => {
    if (numbers.length == 0) throw new Error("要素数が0以上の配列を指定してください。"); // 例外を投げる
    let max = numbers[0];
};

// 例外処理
try {
    const data = [];
    const max = array_sum(data);
    console.log(`最大値: ${max}`);
} catch(e) {
    console.log(e.message);
}