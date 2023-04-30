let a = [1, 2, 3];

function nibai(nums) {
    for (let i = 0, len = nums.length; i < len; i++) {
        nums[i] *= 2;
    }
}

console.log(nibai(a));