const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [6, 7, 8, 9, 10];

for (const num of numbers2) {
    numbers1.push(num);
}

console.log(numbers1);

const numbers3 = [1, 2, 3, 4, 5];
const numbers4 = [6, 7, 8, 9, 10];
const numbers5 = [ ...numbers3, ...numbers4];
console.log(numbers5);

let list = ['桜', '桃'];
let list2 = list.concat(['杉', '桐'], ['杏', '柿']);
console.log(list);
console.log(list2);
list2.push('楓');
console.log(list2);