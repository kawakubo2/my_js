const data = new Set(['壱', '弐', '参']);
data.forEach(function(value, key, set) {
    console.log(value);
})

const data2 = new Set([5, 8, 9, 2, 3, 6, 1, 7, 10, 4]);
const data3 = [...data2];
data3.filter(function(n) { return n % 2 !== 0; })
     .map(function(n) { return n * n;})
     .forEach(function(value) {
        console.log(value);
     });

for (const n of data) {
    console.log(n);
}