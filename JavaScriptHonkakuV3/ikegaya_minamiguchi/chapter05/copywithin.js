let a = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
const b = a.copyWithin(1, 6, 9);
console.log(b);

let c = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
c.fill('z', 3, 6);
console.log(c);