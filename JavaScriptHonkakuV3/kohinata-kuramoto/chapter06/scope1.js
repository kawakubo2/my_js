for (let i = 1; i <= 10; i++) {
  console.log(`i=${i}`);
}
for (let i = 10; i >= 1; i--) {
  console.log(`i=${i}`);
}

function add(x, y) {
  return x + y;
}

let x = 'aaa';
let y = 'bbb';
console.log(`x=${x}, y=${y}`);

let n1 = 10;
let n2 = 20;
console.log(`${n1} + ${n2} = ${add(n1, n2)}`);

