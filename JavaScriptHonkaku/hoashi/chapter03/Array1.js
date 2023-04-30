console.log('---< concat(非破壊的) >---');
const a1 = ['A', 'B', 'C', 'D', 'E'];
const a2 = ['F', 'G', 'H', 'I'];
console.log(`a1: ${a1}`);
console.log(`a2: ${a2}`);
console.log('a3 = a1.concat(a2)');
const a3 = a1.concat(a2);
console.log(`a1: ${a1}`);
console.log(`a2: ${a2}`);
console.log(`a3: ${a3}`);

console.log('---< join(非破壊的) >---');
const a4 = ['JavaScript', 'C#', 'Go', 'Java', 'Python']
console.log(`a4: ${a4}`);
console.log('s1 = a4.join("-")');
const s1 = a4.join('---');
console.log(`a4: ${a4}`);
console.log(`s1: ${s1}`);

console.log('---< slice(非破壊的) >---');
const a5 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];
console.log(`a5: ${a5}`);
console.log('上記配列を3個ずつに分ける');
let start = 0;
const STEP = 3;
let end = start + STEP;
while(true) {
    console.log(a5.slice(start, end));
    start += 3;
    if (end >= a5.length) break;
    end = start + STEP >= a5.length ? a5.length : start + STEP;
}

console.log('---< splice(破壊的メソッド) >---');
console.log('-- 削除 --');
const a6 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
console.log(`a6: ${a6}`);
console.log('a7 = a6.splice(2, 3)');
const a7 = a6.splice(2, 3); 
console.log(`a6: ${a6}`);
console.log(`a7: ${a7}`);

console.log('-- 置換 --');
const a8 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
console.log(`a8: ${a8}`);
console.log("a9 = a8.splice(2, 3, 'X', 'Y')");
const a9 = a8.splice(2, 3, 'X', 'Y'); 
console.log(`a8: ${a8}`);
console.log(`a9: ${a9}`);

console.log('-- 挿入 --');
const a10 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
console.log(`a10: ${a10}`);
console.log("a11 = a10.splice(2, 0, 'X', 'Y')");
const a11 = a10.splice(2, 0, 'X', 'Y'); 
console.log(`a10: ${a10}`);
console.log(`a11: ${a11}`);

console.log('---< from(静的) >---');
function my_sum() {
    return Array.from(arguments).filter(n => n % 2 === 0).reduce((a, b) => a + b);
}
console.log(my_sum(1, 2, 3, 4, 5));

console.log('---< of(静的メソッド) >---');
const a12 = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14);
console.log(`a12: ${a12}`);

console.log('---< fill(破壊的) >---');
const a13 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
console.log(`a13: ${a13}`);
console.log("a13.fill('Z', 2, 3)");
a13.fill('Z', 2, 5);
console.log(`a13: ${a13}`);

console.log('---< pop, push >---');
const a14 = [];
a14.push('main');
a14.push('a');
a14.push('b');
a14.push('c');
console.log(a14.pop());
console.log(a14.pop());
console.log(a14.pop());
console.log(a14.pop());