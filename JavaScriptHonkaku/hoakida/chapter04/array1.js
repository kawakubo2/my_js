let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

const plus10 = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        nums[i] += 10
    }
}
const plus10_2 = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] += 10
    }
}

function plus10_3(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] += 10
    }
}
plus10(numbers);
console.log(numbers);
plus10_2(numbers);
console.log(numbers);
plus10_3(numbers);
console.log(numbers);