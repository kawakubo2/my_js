const numbers = [5, -4, 3, 1, 2, 9, 8, 6, 7, 4, -8, 10];

function array_sum1(nums) {
    let total = 0;
    for (const n of nums) {
        total += n;
    }
    return total;
}
console.log(`合計: ${array_sum1(numbers)}`);

const higher_sum = (nums, filter) => {
    let total = 0;
    for (const n of nums) {
        if (filter(n)) {
            total += n;
        }
    }
    return total;
};

console.log(higher_sum(numbers, n => n % 2 === 0 && n > 0));

// 帆足 、21:36
function higherSum(nums,f){
    let total = 0;
    for(const n of nums){
        if(f(n)){
            total += n;
        }
    }
    return total;
}
function isPositiveEven(value){
    if(value % 2 === 0 && value > 0){
        return true;
    }else{
        return false;
    }
}
console.log(higherSum(numbers, isPositiveEven));
console.log(higherSum(numbers, n => n % 2 !== 0));

const myconsole = name => 
    message => console.log(`${name}: ${message}`);

const person1 = myconsole('山田');
const person2 = myconsole('鈴木');

person1('今日の夜は冷えそうだよ。');
person2('夕方には帰るから大丈夫だよ。');
person2('Kさんは24時に帰るから大変そうだね');
