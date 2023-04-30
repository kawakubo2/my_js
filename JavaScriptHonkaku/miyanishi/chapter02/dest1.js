function group_func(nums) {
    let total = 0;
    let cnt = 0;
    let max = nums[0];
    let min = nums[0];
    for (let n of nums) {
        total += n;
        cnt++;
        if (n > max) {
            max = n;
        }
        if (n < min) {
            min = n;
        }
    }
    return [total, total / cnt, max, min, cnt];
}

let numbers = [9, 1, 3, 10, 2, 4, 7, 6, 8, 5]

let [sum, avg, max, min, count]= group_func(numbers);
console.log("合計:" + sum);
console.log("平均:" + avg);
console.log("最大:" + max);
console.log("最小:" + min);
console.log("件数:" + count);

console.log([] == false);

let a = 10;
let b = 4;
let c = 3;
// 短絡評価(ショートカット評価)
if (a < 20 || (b *= 2) === 8) {
    c *= 10;
}
a = 10;
b = 4;
c = 3;

console.log("a:" + a)
console.log("b:" + b)
console.log("c:" + c)

console.log(a > 10 || b === 4 && c > 5);

let msg = '';
msg = msg || 'こんにちは、世界！';
console.log(msg);

let array1;
array1 = array1 || [];
console.log(array1);

let x1 = 0.2;
let x2 = 0.6;
console.log(x1 * 10 * 3 === x2 * 10);

let array2 = [10, 20, 30, 40];
for (let num of array2) {
    console.log(num);
}
for (let num in array2) {
    console.log(num);
}
let member = {name: '山田太郎', age: 28, address: '福岡県久留米市', greet: function() {console.log(this.name + 'さん、こんにちは！'); } }; // オブジェクトリテラル
member.greet();
let employees = {a101: '山田太郎', a102: '横山花子', a103: '田中一郎'}; // 連想配列
let assoc1 = {x: 10, y: 20, z:30};
// $assoc1 = ['x' => 10, 'y' => 20, 'z' => 30];

for (let key in assoc1) {
    console.log(key + ":" + assoc1[key]);
}

let rectangle = {width: 30, height: 40, get_area: function() { return this.width * this.height; }};
console.log(rectangle.get_area());

for (let i = 0; i < array2.length; i++) {
    console.log(array2[i]);
}

for (let n of array2) {
    console.log(n);
}