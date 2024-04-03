function gassCharge(litter, unit_price, member=false) {
    unit_price = member ? unit_price - 3: unit_price;
    return litter * unit_price
};

console.log(gassCharge(20, 170));
console.log(gassCharge(20, 170, true));