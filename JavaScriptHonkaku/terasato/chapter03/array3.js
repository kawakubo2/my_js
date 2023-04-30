let array = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

let data = [];

for (let i = 0, len = array.length; i < len; i++) {
    data.push(array.pop());
}

console.log(data.toString());

array = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
}

console.log(array.toString());

let numbers1 = [8, 12, 9, 24, 3, 6, 19, 21, 5, 10];
numbers1.sort(function(x, y) { return x - y; });
console.log(numbers1.toString());

let numbers2 = [8.0, 12.3, 9.1, 24.5, 3.9, 6.4, 19.1, 21.0, 5.7, 10.2];
numbers2.sort(function(x, y) {
    return x - y;
    /*
    if (x < y) {
        return -1;
    } else if (x > y) {
        return 1;
    } else {
        return 0;
    }*/
});
console.log(numbers2.toString());

function bmi(weight, height) {
    return weight / (height / 100) ** 2;
}

const members = [
    { name: '山田太郎', weight: 70, height: 168 },
    { name: '田中一郎', weight: 70, height: 178 },
    { name: '鈴木次郎', weight: 70, height: 170 },
    { name: '佐藤勝男', weight: 70, height: 175 }
];

members.sort(function(m1, m2) {
    if (bmi(m1.weight, m1.height) < bmi(m2.weight, m2.height)) {
        return -1;
    } else if (bmi(m1.weight, m1.height) > bmi(m2.weight, m2.height)) {
        return 1;
    } else {
        return 0;
    }
});

console.log(members);

members.forEach(function(member) { console.log(`${member.name}:${bmi(member.weight, member.height)}`); });

const numbers3 = [1, 2, 3, 4, 5, 6];
numbers3.forEach((num) => console.log(num ** 2));

let numbers4 = numbers3.filter((num) => num % 2 === 0);
console.log(numbers4.toString());

let numbers5 = numbers3.map((num) => num ** 2);
console.log(numbers5.toString());

let numbers6 = [5, 10, 3, 9, 6, 8, 7, 11];
let numbers7 = numbers6.filter((num) => num % 2 !== 0).map((r) => r ** 2 * Math.PI);
console.log(numbers7.toString());

let areaTotal = numbers6
    .filter((num) => num % 2 !== 0)
    .map((r) => r ** 2 * Math.PI)
    .reduce((total, area) => total + area);

console.log(`合計面積: ${areaTotal}`);

numbers8 = [1, 2, 3, 4, 5, 6];
let b1 = numbers8.every((num) => num > 0);
console.log(b1);
let b2 = numbers8.every((num) => num % 2 === 0);
console.log(b2);

let b3 = numbers8.some((num) => num > 0);
console.log(b3);
let b4 = numbers8.some((num) => num % 2 === 0);
console.log(b4);