const price = '123456';

console.log(price.padStart(10, '0'));
console.log(price.padStart(10, ' '));
console.log(price.padStart(10, '★'));

const prices = ['12345', '123456', '1234567', '123', '12345678'];
for (const p of prices) {
    console.log(p.padStart(10, ' '));
}

const fruits = ['apple', 'banana', 'watermelon', 'pear', 'grape'];
for (const f of fruits) {
    console.log(f.padEnd(10, '-'));
}
for (const f of fruits) {
    console.log(f.padStart(10, '*'));
}

const vegetables = [
    ['potato', 123456],
    ['pumpkin', 12345],
    ['tomato', 12345678],
    ['cucumber', 1234]
];


let name_max = 0;
let quantity_max = 0;
for (const n of vegetables) {
    if (n[0].length > name_max) {
        name_max = n[0].length;
    }
    if ((n[1] + '').length > quantity_max) {
        quantity_max = (n[1] + '').length;
    }
}


for (const [name, quantity] of vegetables) {
    console.log('│' + name.padEnd(name_max, ' ') + '│' + (quantity + '').padStart(quantity_max, ' ') + '│');
    console.log('├' + '─'.repeat(name_max) + '┼' + '─'.repeat(quantity_max) + '┤');
}