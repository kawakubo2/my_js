let message = 'こんにちは、JavaScript！！'; // 変数宣言
console.log(message);
message = 'こんにちは、HTML！！';
console.log(message);

// 変数 ---> variable

let names = ['山田', '田中', '鈴木', '佐藤'];
console.log(names[0]); // names[index] index--->添え字
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
// for (let name of names) {
//     console.log(name + 'さん、こんにちは！\n今日は2023年08月号のご案内です。');
// }

function add(x, y) {
    return x + y;
}

console.log(add(10, 20));
console.log(typeof add);