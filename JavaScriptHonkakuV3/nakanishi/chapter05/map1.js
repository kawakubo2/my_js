const strings = ["1.23", "2.34", "3.45"];

const numbers = strings.map(s => Number.parseFloat(s))
                       .map(r => r ** 2 * Math.PI);

console.log(numbers);
