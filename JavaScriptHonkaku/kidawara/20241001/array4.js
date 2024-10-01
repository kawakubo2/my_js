const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24];
/*
3の倍数と4の倍数だけを新しい配列に格納したい。
ただし、3の倍数かつ4の倍数は除外したい.
*/
const newNumbers = [];

for (const num of numbers) {
    if (num % 3 === 0 && num % 4 === 0) {
        continue;
    }
    if (num % 3 === 0) {
        newNumbers.push(num);
    }
    if (num % 4 === 0) {
        newNumbers.push(num);
    }
}
console.log(newNumbers);

const numbers4 = numbers.filter(n => !(n % 3 === 0 && n % 4 === 0) 
                                    && (n % 3 == 0 || n % 4 === 0));
console.log(numbers4);