function sum(...nums) {
    return nums.reduce((total, n) => total + n);
}

try {
    console.log(sum(1, 3, 5, 7, 9));
} catch(e) {
    console.log(e.message);
}