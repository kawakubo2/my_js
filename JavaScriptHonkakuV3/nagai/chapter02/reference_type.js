const a = [1, 2, 4, 8];

function setFirstZero(b) {
  b[0] = 0;
  console.log(`関数内: ${b.toString()}`);
}

setFirstZero(a);
console.log(a);

let x = 10;
function increment(y) {
  y++;
  console.log(`関数内: ${y}`);
}

increment(x);
console.log(x);