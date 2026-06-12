function add1(a, b) {
  return a + b;
}

let x = 10;
let y = 20;

let z = add1(x, y);
console.log(`${x} + ${y} = ${z}`);

// Arrow関数
const add2 = (a, b) => a + b;
z = add2(x, y);
console.log(`${x} + ${y} = ${z}`);