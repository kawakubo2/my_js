let nums = [5, 25, 10];
console.log(nums.sort());
nums.sort(
    function(x, y) {
        return x - y;
    }
);
console.log(nums);