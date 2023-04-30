function nibai(n) {
    n *= 2;
}

let a = 10;
nibai(a);
console.log(a);

function nibai2(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] *= 2;
    }
    // for (let n of nums) {
    //     n *= 2;
    // }
}

let numbers = [1, 2, 3, 4, 5];
nibai2(numbers);
console.log(numbers);

let numbers2 = numbers;
numbers2[0] = 1000;
console.log(numbers[0]);