let numbers = [5, 10, 8, 6, 7, 1, 9, 4, 3, 2];

/*
numbersから偶数だけの合計をもとめる
*/
let total = 0;
for (let num of numbers) {
    // 条件分岐
    if (num % 2 === 0) {
        total += num; // total = total + num
    }
}
console.log(total);