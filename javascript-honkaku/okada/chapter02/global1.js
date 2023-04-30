'use strict';
let num = 10;
// abc = 'abc';
function clear() {
    'use strict';
    num = 0;
    a = 0;
    b = 0;
    c = 0;
}
let a = 10;
let b = 20;
let c = 20;
clear();
console.log('a = ' + a, ', b = ' + b + ', c = ' + c);
console.log('gloal num:' + num);

console.log(0o777);
// console.log(0777);

function my_array_sum(nums) {
    let total = 0;
    for (let n of nums) {
        total += n;
    }
    return total;
}

console.log('合計:' + my_array_sum([1, 2, 3, 4, 5, 6]));