let a = [1, 2, 3, 4, 5]
let b = 10;

console.log(Array.isArray(a));
console.log(Array.isArray(b));

console.log(a.toString());

console.log(a.indexOf(4));
console.log(a.indexOf(8));

let email = 'taro@example.com';
console.log(`ローカル部: ${email.substr(0, email.indexOf('@'))}`);
console.log(`ドメイン部: ${email.substr(email.indexOf('@') + 1)}`);

filename = 'abc.def.ghi.jkl.js';
let pos = filename.lastIndexOf('.');
console.log(`ベース名: ${filename.substring(0, pos)}`);
console.log(`拡張子: ${filename.substring(pos)}`);

let array1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
console.log('---< splice(破壊的メソッド) >---');
console.log('--< 削除 >--');
console.log(`削除前: a=${array1}`);
let result1 = array1.splice(1, 3);
console.log('let result1 = array1.splice(1, 3)');
console.log(`削除後: a=${array1}`);
console.log(`戻り値: a=${result1}`);

let array2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
console.log('--< 置換え >--');
console.log(`置換え前: a=${array2}`);
let result2 = array2.splice(1, 3, 'X', 'Y');
console.log("let result2 = array2.splice(1, 3, 'X', 'Y')");
console.log(`置換え後: a=${array2}`);
console.log(`戻り値: a=${result2}`);

let array3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
console.log('--< 挿入 >--');
console.log(`挿入前: a=${array3}`);
/*
    1文字目から0文字分削除 ---> 削除しない
*/
let result3 = array3.splice(1, 0, 'X', 'Y');
console.log("let result3 = array3.splice(1, 0, 'X', 'Y')");
console.log(`置換え後: a=${array3}`);
console.log(`戻り値: a=${result3}`);

/*
 下記配列から正の偶数だけ抽出し、それを円の半径とみなし、
 その面積を持った配列を作る。
*/
let numbers = [5, 4, -3, 2, 7, 8, 6, 9];

let circle_total_area = numbers
                            .filter(n => n > 0 && n % 2 == 0)
                            .map(r => Math.pow(r, 2) * Math.PI)
                            .reduce((total, area) => total + area);
console.log(circle_total_area);

let numbers2 = [32, 12, 1, 2, 120, 38, 3, 29];
numbers2.sort();
console.log(numbers2);

let numbers3 = [32, 12, 1, 2, 120, 38, 3, 29];
numbers3.sort((x, y) => x - y);
console.log(numbers3);

/*
 BMIの昇順にソート
 BMI  weight / (height / 100) ** 2
*/
let members = [
    {name: '山田太郎', weight: 70, height: 175},
    {name: '田中一郎', weight: 70, height: 172},
    {name: '鈴木次郎', weight: 70, height: 168},
    {name: '佐藤勝男', weight: 70, height: 180},
    {name: '加藤忠雄', weight: 70, height: 170},
];

members.sort((m1, m2) => {
    if (m1.weight / (m1.height / 100) ** 2 < m2.weight / (m2.height / 100) ** 2) {
        return -1;
    } else if (m1.weight / (m1.height / 100) ** 2 > m2.weight / (m2.height / 100) ** 2) {
        return 1;
    } else {
        return 0;
    }
});

console.log(members);