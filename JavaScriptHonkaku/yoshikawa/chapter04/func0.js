let x = 100;
let y = 200;
let z = {a: 10, b: 10, x, y};
console.log(z);


function sub({x = 1, y = 1}) {
    return x - y;
}

console.log(sub({y, x}));
console.log(sub(z))