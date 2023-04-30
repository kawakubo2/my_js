function getTriangle(base, height) {
    return base * height / 2;
}

console.log(`三角形の面積: ${getTriangle(5, 2)}`);
console.log('三角形の面積: ' + getTriangle(5, 2));

/*
 area = r * r * Math.PI;
 area / Math.PI = r ** 2;
 r = Math.sqrt(area / Math.PI);
*/

function getRadius(area) {
    return Math.sqrt(area / Math.PI);
}
let a = 100;
console.log(`面積が${a}の円の半径は${getRadius(a)}`);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getTotal(nums) {
    let total = 0;
    for (let n of nums) {
        total += n;
    }
    return total;
}

console.log(`合計: ${getTotal(numbers)}`);