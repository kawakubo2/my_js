const numArray = [10, 20, 30];

for (let i = 0; i < numArray.length; i++) {
    numArray[i] += 10;
}

console.log(numArray);

// 以下の書き方ではそれぞれの要素に10加算することはできない。
for (let num of numArray) {
    num += 10
}

console.log(numArray);