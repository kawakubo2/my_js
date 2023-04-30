let scope = 'Gloval Variable';

// 変数の巻き上げ(variable hoisting)
function getValue() {
    let scope; // undefined
    console.log(scope);
    scope = 'Local Variable';
    return scope;
}


function plus10(nums) {
    // for (let i = 0; i < nums.length; i++) {
    //     nums[i] += 10;
    // }
    for (let n of nums) {
        n += 10;
    }
}


let numbers = [1, 2, 3, 4, 5];
for (let n of numbers) {
    console.log(n);
}
plus10(numbers);
for (let n of numbers) {
    console.log(n);
}

let a = 10;
{
    let b = 20;
    {
        let c = 30;
    }
    let d = 40;
}

function sum1() {
    let nums = Array.from(arguments);
    nums.splice(1, 2, 6, 7, 8);
    let result = 0;
    for (let n of nums) {
        result += n;
    }
    return result;
}

console.log(sum1(1, 2, 3, 4, 5));
console.log(sum1(...numbers));
