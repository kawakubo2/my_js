let items = [
    { product_id: 'B000', price: 1000},
    { product_id: 'A001', price: 3000},
    { product_id: 'B002', price: 2000},
    { product_id: 'B003', price: 2000},
    { product_id: 'A004', price: 4000},
    { product_id: 'B005', price: 5000},
];
console.log(items);

for (let item of items) {
    discount(item);
}
console.log(items);

/*
 製品id(product_id)がAで始まる商品の価格を1割引きする関数
*/
function discount(item) {
    if (item['product_id'].startsWith('A')) {
        item['price'] = Math.floor(item['price'] * 0.9);
    }
}

/*
 製品の配列(items)を受け取り、製品id(product_id)がBで始まる製品を削除する関数
*/
const remove_b = items => { 
    for (let i = items.length - 1; i >= 0; i--) {
        if (items[i]['product_id'].startsWith('B')) {
            items.splice(i, 1);
        }
    }
}

remove_b(items);
console.log(items);

const linear_func1 = x => x * 2 + 3;
console.log(linear_func1(5));

const linear_func2 = x => x * (-3) + 5;
console.log(linear_func2(2));

const linear_func3 = (formula, x) => {
    let func = new Function('x', formula);
    return func(x);
};

console.log(linear_func3('return x * 2 + 3;', 5));
console.log(linear_func3('return x * -3 + 5;', 2));

let numbers1 = [1, 2, 3, 4, 5];

const func1 = nums => {
    let result = 1;
    for (let n of nums) {
        result *= n;
    }
    return result;
}

console.log(func1(numbers1));

/*
初任給が年収100万円。1年で1割給料が上がると10年後は年収いくらか？
*/
const func2 = year => {
    let result = 100;
    for (let i = 0; i < year; i++) {
        result *= 1.1; // result = result * 1.1
    }
    return result;
};

console.log(func2(10));

let power = 100;
for (let i = 0; i < 365; i++) {
    power *= 1.01;
}
console.log(power);

const func3 = (initial_value, count, rate) => {
    let result = initial_value;
    for (let i = 0; i < count; i++) {
        result *= (1 + rate);
    }
    return result;
}

console.log(func3(100, 365, 0.01));

console.log(func3(3000, 35, 0.05));

let alpha = ['a', 'b', 'c', 'd', 'a', 'e', 'b', 'c', 'a', 'f', 'a'];

const alpha_count = (alphabets, ch) => {
    let count = 0;
    for (let alpha of alphabets) {
        if (alpha == ch) {
            count++;
        }
    }
    return count;
};

console.log(alpha_count(alpha, 'a')); // 4
console.log(alpha_count(alpha, 'b')); // 2
console.log(alpha_count(alpha, 'g')); // 0

/*
const array_count = (array, elem) => {
    let count = 0;
    for (let a of array) {
        if (a == elem) {
            count++;
        }
    }
    return count;
}
*/
let fruits_array = [
    ['バナナ', 'リンゴ', 'パイナップル', 'オレンジ', 'グレープ', 'グレープ', 'リンゴ', 'バナナ', 'バナナ'],
    ['リンゴ', 'オレンジ', 'パイナップル', 'オレンジ', 'グレープ', 'グレープ', 'リンゴ', 'バナナ', 'バナナ'],
    ['バナナ', 'リンゴ', 'パイナップル', 'オレンジ', 'グレープ', 'グレープ', 'リンゴ', 'バナナ', 'バナナ'],
    ['バナナ', 'リンゴ', 'パイナップル', 'オレンジ', 'グレープ', 'グレープ', 'リンゴ', 'バナナ', 'バナナ'],
];
const fruit_counter = (fruits) => {
    let counter = new Map();
    for (let fruit of fruits) {
        if (counter.has(fruit)) {
            counter.set(fruit, counter.get(fruit) + 1);
        } else {
            counter.set(fruit, 1);
        }
    }
    return counter;
}

let fruit_map = fruit_counter(fruits_array[1]);
for (let[fruit, count] of fruit_map) {
    console.log(`${fruit}: ${count}`);
}

// { "バナナ": 3, "リンゴ": 2, "パイナップル": 1, "オレンジ": 1, "グレープ": 2}