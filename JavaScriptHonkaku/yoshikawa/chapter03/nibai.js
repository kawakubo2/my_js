const nibai = value => {
    for (let i = 0, len = value.length; i < len; i++) {
        value[i] *= 2;
    }
};

const nibai2 = value => {
    for (let elem of value) {
        elem *= 2;
    }
};

const numbers = [1, 2, 3];
console.log('------< nibai >-------')
console.log(`二倍する前: ${numbers.toString()}`);
nibai(numbers);
console.log(`二倍した後: ${numbers.toString()}`);

const numbers2 = [1, 2, 3];
console.log('------< nibai2 >-------')
console.log(`二倍する前: ${numbers2.toString()}`);
nibai2(numbers2);
console.log(`二倍した後: ${numbers2.toString()}`);