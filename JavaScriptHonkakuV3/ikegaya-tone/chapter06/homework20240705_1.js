console.log('---< 不規則な配列の合計 >---');
const numbers1 = [1, [2, 3, [4, 5], 6], [7, [8, [9, 10]]]];
const numbers2 = [[[1, 2], 3, 4], [5, 6, 7], [[8], 9, 10]];
// 
function recursive_sum(numbers) {
    let total = 0;
    for (const item of numbers) {
        if (Array.isArray(item)) { // typeof item === 'object' && item instanceof Array
            total += recursive_sum(item);
        } else {
            total += item;
        }
    }
    return total;
}

console.log(recursive_sum(numbers1));
console.log(recursive_sum(numbers2));