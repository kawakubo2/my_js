const numbers = ['123', '45', '7', '385', '98'];

for (const number of numbers) {
    console.log(number);
}

console.log('----------');

for (const number of numbers) {
    console.log(number.padStart(3, '0'));
}