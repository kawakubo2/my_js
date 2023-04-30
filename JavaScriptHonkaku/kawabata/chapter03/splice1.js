let a1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log('---< 削除 >---');
let b1 = a1.splice(1, 2);
console.log('a1:' + a1);
console.log('b1:' + b1);

let a2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log('---< 置換 >---');
let b2 = a2.splice(1, 2, 'X', 'Y', 'Z');
console.log('a2:' + a2);
console.log('b2:' + b2);

let a3 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log('---< 挿入 >---');
let b3 = a3.splice(1, 0, 'X', 'Y', 'Z');
console.log('a3:' + a3);
console.log('b3:' + b3);

let numbers = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let circle_area_total = numbers.filter(n => n > 0 && n % 2 == 0)
                          .map(r => Math.pow(r, 2) * Math.PI)
                          .reduce((total, n) => total + n);

console.log(circle_area_total);