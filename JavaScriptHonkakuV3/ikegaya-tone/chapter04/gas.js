const member = true;
const litter = 20;
let unit_price = 170;

if (member) {
    unit_price -= 3; // unit_price = unit_price - 3;
}

console.log(`料金は${Math.floor(unit_price * litter)}円です`)