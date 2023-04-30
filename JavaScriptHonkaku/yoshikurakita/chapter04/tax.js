// tax.js

function func(tax) {
    return function(price) {
        return price * (1 + tax);
    };
}

f010 = func(0.1)
f008 = func(0.08)

let price = 1000;
console.log(f010(price));
console.log(f008(price));