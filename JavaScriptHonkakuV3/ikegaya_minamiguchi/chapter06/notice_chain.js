'use strict';

let y = 100;


// function checkScope() {
//     let x = y = 13;
// }

function checkScope() {
    let x, y;
    x = y = 13;
}

checkScope();
console.log(y);