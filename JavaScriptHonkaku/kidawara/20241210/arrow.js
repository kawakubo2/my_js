function trapezoid(upperbase, lowerbase, height) {
    return (upperbase + lowerbase) * height / 2;
}

const upper = 12;
const lower = 18;
const height = 10;

console.log(trapezoid(upper, lower, height));

const trapezoid2 = (uppperbase, lowerbase, height) => (uppperbase + lowerbase) * height / 2;
console.log(trapezoid2(upper, lower, height));
