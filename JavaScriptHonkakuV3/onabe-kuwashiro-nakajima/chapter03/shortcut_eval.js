let x = 10;
let y = 5;
let z = 3;

if (x > 5 || (y *= 2) > 8) {
    z += 100;
}

console.log(`x = ${x}, y = ${y}, z = ${z}`);

let age = 18;

age >= 20 || console.log('お酒は販売できません。');

let a = 'abc';

a && console.log('ｘｘｘ');