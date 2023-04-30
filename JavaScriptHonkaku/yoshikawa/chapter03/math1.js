const n1 = 1.00000001;
console.log(Math.ceil(n1));
const n2 = 1.99999999;
console.log(Math.floor(n1));

function higher_round(func, num, keta) {
    return func(num * Math.pow(10, keta)) / Math.pow(10, keta);
}

const n3 = 1.2345;
console.log(higher_round(Math.ceil, n3, 3));
console.log(higher_round(Math.floor, n3, 3));
console.log(higher_round(Math.round, n3, 3));