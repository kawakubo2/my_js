let nums = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8];

function my_array_sum(nums) {
    let total = 0;
    for (let n of nums) {
        total += n;
    }
    return total;
}

function even_sum(nums) {
    let total = 0;
    for (let n of nums) {
        if (n % 2 == 0) {
            total += n;
        }
    }
    return total;
}

function positive_even_sum(nums) {
    let total = 0;
    for (let n of nums) {
        if (n % 2 === 0 && n > 0) {
            total += n
        }
    }
    return total;
}

function higher_array_sum(nums, func) {
    let total = 0;
    for (let n of nums) {
        if (func(n)) {
            total += n;
        }
    }
    return total;
} 

console.log(nums);
console.log('my_array_sum => ' + my_array_sum(nums));
console.log('higher_array_sum => ' + higher_array_sum(nums, (n) => true));
console.log('even_sum => ' + even_sum(nums));
console.log('higher_array_sum => ' + higher_array_sum(nums, (n) => n % 2 === 0));
console.log('positive_even_sum => ' + positive_even_sum(nums));
console.log('higher_array_sum => ' + higher_array_sum(nums, (n) => n % 2 === 0 && n > 0));

chars = ['A', 'Z', 'a', 'F', 'A', 'C', 'b', 'B', 'c', 'B', 'A', 'a'];

// {'A': 3, 'B': 2, 'C': 1, 'F': 1, 'Z': 1, 'a': 2, 'b': 1, 'c': 1};
