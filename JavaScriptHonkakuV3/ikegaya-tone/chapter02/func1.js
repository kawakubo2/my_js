function mul(x, y) {
    return x * y;
}

const a = 10;
const b = 7;
const c = mul(a, b);
console.log(`${a} * ${b} = ${c}`);
console.log(`${a} * ${b} = ${mul(a, b)}`)