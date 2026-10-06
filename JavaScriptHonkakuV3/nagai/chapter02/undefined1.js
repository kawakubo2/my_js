function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    // return null;
    return Number.NaN;
  }
  return x * y;
}

console.log(add(10, 20));
console.log(add(10, '123'));