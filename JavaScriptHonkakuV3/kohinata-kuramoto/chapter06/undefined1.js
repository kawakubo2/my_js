let name; // 宣言
console.log(`name=${name}`);

function print_add(x, y) {
  console.log(`${x} + ${y} = ${x + y}`);
  return;
}

const result = print_add(10, 5);
console.log(`result=${result}`);