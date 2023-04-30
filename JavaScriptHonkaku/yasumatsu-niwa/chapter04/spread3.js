const nums = [1, 2, 3, 4, 5];
console.log(Math.max(...nums));

let nums2 = [1, 2, 3, 4, 5];
let nums3 = [...nums2, 6, 7, 8];
console.log(nums3);
let nums4 = [nums2, 10, 11, 12];
console.log(nums4);