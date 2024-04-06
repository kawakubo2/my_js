let data = [1, 2, 3, 4];
data = data.fill(0, 0, data.length);
console.log(data);
let data2 = new Array(1000);
data2 = data2.fill(1, 0, data2.length);
console.log(data2.slice(0, 5));
console.log(data2.slice(data2.length - 5));

const BEGIN = 0;
const END = 100;
const STEP = 10;

let list = Array.from(
    { length: (END - BEGIN) / STEP + 1 },
    function (v, i) {
        return BEGIN + (i * STEP)
    }
)
console.log(list)