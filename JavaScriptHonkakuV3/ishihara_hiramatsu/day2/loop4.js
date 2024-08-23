const numbers = [15, 62, 50, 37, 44, 28, 57, 31];

let total = 0;
let i = 0;
while (total <= 150) { // 条件式がtrueの間繰り返す
    total += numbers[i];
    i++;
}
console.log(total);