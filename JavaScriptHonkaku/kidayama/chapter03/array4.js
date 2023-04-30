const array1 = ["J", "A", "V", "A", "S", "C", "R", "I", "P", "T"];
console.log('---< reverseメソッド(破壊的メソッド) >---');
console.log('操作前:' + array1.toString());
array1.reverse();
console.log('array1.reverse() ---> ' + array1.toString());
console.log('操作後:' + array1.toString());

const array2 = [5, 2, 3, 11, 1, 4, 18, 25, 4, 9];
console.log('---< sortメソッド(破壊的メソッド) >---');
console.log('操作前:' + array2.toString());
array2.sort();
console.log('array2.sort() ---> ' + array2.toString());
console.log('操作後:' + array2.toString());

const array3 = [5, 2, 3, 11, 1, 4, 18, 25, 4, 9];
console.log('---< sortメソッド(破壊的メソッド) >---');
console.log('操作前:' + array3.toString());
array3.sort(function(n1, n2) {
    return n1 - n2;
});
console.log('array3.sort() ---> ' + array3.toString());
console.log('操作後:' + array3.toString());

console.log('---< forEachメソッド >---');
const array4 = [10, 5, 7, 8, 2, 9, 3];
array4.forEach(num => console.log(num ** 2)); // アロー関数 ---> 引数 => 関数本体

console.log('---< filterメソッド >---');
const array5 = [4, 3, -8, 7, 10, 6, 5, -5];
console.log("操作前:" + array5.toString());
const array6 = array5.filter(num => num > 0 && num % 2 === 0);
console.log('array5.filter(num => num > 0 && num % 2 === 0 ---> ' + array6.toString());

console.log('---< mapメソッド >---');
const array7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("操作前:" + array7.toString());
const array8 = array7.map(r => r ** 2 * Math.PI);
console.log('array7.map(r => r ** 2 * Math.PI) ---> ' + array8.toString());

console.log('---< map/filter >---');
const array9 = [4, -3, 2, 3, -5, 7, 9, 6];
console.log("操作前:" + array9.toString());
const array10 = array9.filter(n => n > 0 && n % 2 !== 0).map(r => r ** 2 * Math.PI);
console.log('array9.filter(n => n > 0 && n % 2 !== 0).map(r => r ** 2 * Math.PI) ---> '
    + array10.toString()
);

const employees = [
    { name: "山田太郎", gender: "男", weight: 70, height: 178},
    { name: "横山花子", gender: "女", weight: 75, height: 170},
    { name: "田中一郎", gender: "男", weight: 82, height: 180},
    { name: "山本久美子", gender: "女", weight: 68, height: 172},
    { name: "鈴木次郎", gender: "男", weight: 78, height: 168},
];

/*
男だけを取り出し、BMIを計算し、名前とBMIを表示する
山田太郎: 22.09
田中一郎: 25.31
鈴木次郎: 27.64
*/

const result = employees.filter(e => e['gender'] === '男')
                        .map(e => {
                            let bmi = e['weight'] / (e['height'] / 100) ** 2;
                            e['bmi'] = bmi;
                            return e; 
                        })
                        .forEach(e => console.log(`${e['name']}: ${e['bmi'].toFixed(2)}`));