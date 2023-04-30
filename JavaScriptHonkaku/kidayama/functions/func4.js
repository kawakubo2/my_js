const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function divide_nums(nums) {
    let odd = [];
    let even = [];
    for (let n of nums) {
        if (n % 2 === 0) {
            even.push(n);
        } else {
            odd.push(n);
        }
    }
    return [odd, even];
}

let [odd_nums, even_nums] = divide_nums(numbers);

console.log(odd_nums);
console.log(even_nums);