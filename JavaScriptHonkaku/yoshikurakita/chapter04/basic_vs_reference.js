console.log('---< 基本型 >---');
let n = 10;

function nibai(m) {
    m *= 2;
}

nibai(n);
console.log(n);

console.log('---< 参照型 >---');

let numbers = [1, 2, 3];

function sanbai(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] *= 3;
    }
}

sanbai(numbers);
console.log(numbers);

let member = {name: '山田太郎', address: '東京都世田谷区用賀', age: 28};

function increment_age(mem) {
    mem.age++;
}

increment_age(member);
console.log(member);