const numbers = [1, 2, 3, 4, 5, 6];

// iteratorの糖衣構文(Syntax Sugar)
for (const num of numbers) {
    console.log(num);
}


const iter = numbers[Symbol.iterator]();
console.log(iter);
let data;
while (data = iter.next()) {
    if (data.done) break;
    console.log(data.value);
}