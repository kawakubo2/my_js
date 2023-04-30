let x = 0.2;
let y = 0.6;

console.log(x * 10 * 3 === y * 10);
console.log(Math.abs(x * 3 - y) < Number.EPSILON);

let n = 12345;
console.log(`2進数: ${n.toString(2)}`);
console.log(`8進数: ${n.toString(8)}`);
console.log(`16進数: ${n.toString(16)}`);
