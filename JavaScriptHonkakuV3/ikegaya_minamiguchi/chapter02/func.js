function add(a, b) {
  return a + b;
}
function add2(a, b) {
  console.log(a +b);
}

console.log(add(100, 200));
console.log(add2(100, 200));

function mul(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }
  return a * b
}

console.log(mul(8, 7));
console.log(mul(10, 'ab'));