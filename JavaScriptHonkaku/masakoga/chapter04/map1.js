let str = 'AKkglejekjlznljetje930980ndkgeljgwjAvbVDVhCJuqqKhBCqekuwkj';

for (let i = 65; i <= 90; i++) {
    console.log(String.fromCodePoint(i));
}
for (let i = 97; i <= 122; i++) {
    console.log(String.fromCodePoint(i));
}

function change(price, unit_price, quantity) {
    let result = price - (unit_price * quantity);
    if (result < 0) {
        throw Error('金額が' + (result * -1) + '円不足しています。');
    }
    return result;
}

try{
    console.log(`おつりは${change(1000, 150, 4)}円です。`);
} catch(e) {
    console.log(e);
}
try{
    console.log(`おつりは${change(500, 150, 4)}円です。`);
} catch(e) {
    console.log(e.message);
}

let shopping_cart = [
    { name: 'きゅうり', unit_price: 50, quantity: 3},
    { name: 'トマト', unit_price: 80, quantity: 4},
    { name: '玉子(1パック)', unit_price: 200, quantity: 2},
    { name: '牛乳', unit_price: 180, quantity: 2},
];

function calcTotal(cart) {
    let total = 0;
    for (let item of cart) {
        total += (item['unit_price'] * item['quantity']);
    }
    return total;
}

function calcTotal2(cart) {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].unit_price >= 100) {
            total += cart[i].unit_price * cart[i].quantity;
        }
    }
    return total;
}

function calcTotal3(cart) {
    let total = 0;
    for (let item of cart) {
        if (item.unit_price >= 100) {
            total += item.unit_price * item.quantity;
        }
    }
    return total;
}

let total_price = calcTotal2(shopping_cart);
console.log(`単価が100円以上の合計額: ${total_price}`);

let numbers = [100, 150, 110, 180];

let n1 = 100;
let n2 = 200;
let n3 = 400;

function my_sum(a, b, c) {
    return a + b + c; // 代入文
}

console.log(my_sum(n1, n2, n3));

// 最大値を求める関数
function my_max(a, b, c, d) {
    let m = a;
    if (b > m) {
        m = b;
    }
    if (c > m) {
        m = c;
    }
    if (d > m) {
        m = d;
    }
    return m;
}



console.log(my_max(170, 165, 180, 178));

let num1 = 8;
let num2 = 7;

function my_add(x, y) {
    return a + b;
}

let numbers1 = [72, 18, 53, 89, 93, 38, 49, 70];
let numbers2 = [-72, -18, -53, -89, -93, -38, -49, -70];

function array_max1(nums) {
    let m = nums[0];
    for (let num of nums) {
        if (num > m) {
            m = num;
        }
    }
    return m;
}
function array_max2(nums) {
    let m = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > m) {
            m = nums[i];
        }
    }
    return m;
}

console.log(array_max1(numbers1));
console.log(array_max1(numbers2));
console.log(array_max2(numbers1));
console.log(array_max2(numbers2));

function array_even_sum(nums) {
    let sum = 0;
    for (let num of nums) {
        if (num % 2 == 0) {
            sum += num
        }
    }
    return sum;
}

console.log(`偶数の合計: ${array_even_sum(numbers1)}`);

function calcTotalOver1000(cart) {

}

let sales = [
    { date: '2021-3-18', price: 3000},
    { date: '2021-02-25', price: 2000},
    { date: '2021-01-05', price: 1000},
    { date: '2021-03-10', price: 1500},
    { date: '2021-03-02', price: 1800},
    { date: '2021-02-15', price: 3200},
];

function calcTotalGroupByMonth(sales) {
    let monthlySales = new Map();
    for (let s of sales) {
        let month = Number.parseInt(s.date.split('-')[1]);
        if (monthlySales.has(month)) {
            monthlySales.set(month, monthlySales.get(month) +  s.price);
        } else {
            monthlySales.set(month, s.price);
        }
    }
    return monthlySales;
}

console.log(calcTotalGroupByMonth(sales));