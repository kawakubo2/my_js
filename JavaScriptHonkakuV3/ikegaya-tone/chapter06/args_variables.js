function sum(...nums) {
    if (Array.isArray(nums)) { console.log('numsは配列です。'); }
    let result = 0;
    for (const num of nums) {
        result += num;
    }
    return result;
}

const total1 = sum(1, 3, 5, 7, 9);
console.log(`合計: ${total1}`);

console.log('ES2015より前の書き方');

function sum2() {
    if (Array.isArray(arguments)) { 
        console.log('numsは配列です。'); 
    } else {
        console.log('numsは配列ではありません。'); 
    }
    var result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

const total2 = sum2(1, 3, 5, 7, 9);
console.log(`合計: ${total2}`);