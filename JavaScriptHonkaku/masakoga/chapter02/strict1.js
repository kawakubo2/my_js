'use strict';

let price = 1000;
console.log(price);

function abc() {
    'use strict';
    price = 100;
}

abc();

console.log(price);