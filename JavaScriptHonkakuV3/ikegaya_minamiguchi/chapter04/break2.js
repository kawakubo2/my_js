let i = 1;
let result = 0;
while (true) {
  result += i;
  if (result > 1000) break;
  i++;
}

console.log(`合計値は1000を超えるのは${i}`);