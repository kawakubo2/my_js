function func(...nums) {
    nums.push(11);
    nums.shift()
    return nums;
}

console.log(func(1, 3, 5, 7, 9))