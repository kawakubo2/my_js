let x = 10;
x = x + 10;

let y = 10;
y = y + 1;

let z = 10;
z++; // z = z + 1 ---> z += 1 ---> z++
console.log(`z = ${z}`);

let a = 10;
let b = ++a; // 前置インクリメント
console.log(`a = ${a}, b = ${b}`);

let c = 10;
let d = c++; // 後置インクリメント
console.log(`c = ${c}, d = ${d}`);

let e = 10;
console.log(e++);
console.log(`e = ${e}`);