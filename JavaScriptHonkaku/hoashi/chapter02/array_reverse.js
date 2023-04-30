const numbers = [82, 12, 37, 35, 77];

function array_reverse(nums) {
    const size = nums.length;
    for (let i = 0; i < size / 2; i++) {
        let temp = nums[i];
        nums[i] = nums[size - 1 - i];
        nums[size - 1 - i] = temp
    }
}

array_reverse(numbers);
console.log(numbers);

function array_reverse2(nums) {
    const size = nums.length;
    for (let i = 0, j = size - 1; i < size / 2; i++, j--) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}
const chars = ['a', 'b', 'c', 'd', 'e', 'f'];
array_reverse2(chars);
console.log(chars);