const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const size = 5;
let end = 0;
for (let i = 0; i < alpha.length; i++) {
  end += size;
  if (end > alpha.length)
  console.log(alpha.slice(i, i + size));
}