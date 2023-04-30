console.log('---< join(非破壊的) >---');
let a1 = ['JavaScript', 'Python', 'TypeScript', 'Rust', 'Go']
let s1 = a1.join('\t')
console.log(s1);

let a2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
console.log('---< slice(非破壊的メソッド) >---');
console.log('操作前: ' + a2);
let a3 = a2.slice(2, 5);
console.log('a2.slice(2, 5) ---> ' + a3)
console.log('操作後: ' + a2);

let a4 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
console.log('---< splice(破壊的メソッド) >---');
console.log('==< 削除 >==');
console.log('操作前a4: ' + a4);
let a5 = a4.splice(2, 3);
console.log('a4.splice(2, 3) ---> ' + a5);
console.log('操作後a4: ' + a4);

let a6 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
console.log('---< splice(破壊的メソッド) >---');
console.log('==< 置換 >==');
console.log('操作前a6: ' + a6);
let a7 = a6.splice(2, 3, 'X', 'Y');
console.log('a6.splice(2, 3) ---> ' + a5);
console.log('操作後a6: ' + a6);

let a8 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
console.log('---< splice(破壊的メソッド) >---');
console.log('==< 挿入 >==');
console.log('操作前a8: ' + a8);
let a9 = a8.splice(2, 0, 'X', 'Y');
console.log('a8.splice(2, 3) ---> ' + a9);
console.log('操作後a8: ' + a8);

function mysum() {
    console.log(Array.isArray(arguments));
    let nums = Array.from(arguments);
    console.log(Array.isArray(nums));
}

mysum(1, 2, 3, 4, 5, 6, 7);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let circle_area_array = numbers.filter(r => r % 2 === 0).map(r => Math.pow(r, 2) * Math.PI);
console.log(circle_area_array);

let circle_area_total = numbers
                            .filter(r => r % 2 === 0)
                            .map(r => Math.pow(r, 2) * Math.PI)
                            .reduce((total, area) => total + area);
console.log(circle_area_total);

let numbers2 = [5, 2, 12, 28, 3, 1, 23, 6];

numbers2.sort((x, y) => x - y);
console.log(numbers2);

let classes = ['部長', '課長', '主任', '担当'];
let members = [
    { name: '鈴木清子', clazz: '主任', weight: 60, height: 162},
    { name: '山口久雄', clazz: '部長', weight: 60, height: 172},
    { name: '井上太郎', clazz: '担当', weight: 60, height: 168},
    { name: '和田知美', clazz: '課長', weight: 60, height: 171},
    { name: '小森雄太', clazz: '担当', weight: 60, height: 167}
];

members.sort((x, y) => classes.indexOf(x.clazz) - classes.indexOf(y.clazz));

console.log(members);

let map1 = new Map();
let x = {};
map1.set(x, 'hoge');
console.log(map1.get(x));