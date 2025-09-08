const numbers1 = [1, 1, 2, 3, 3, 5, 6, 7, 8, 8, 10, 12, 12, 13];
const numbers2 = [7, 5, 10, 12, 11, 4, 1, 8, 3, 1];
/*
numbers1に配列からnumbers2の配列の要素を削除したい
*/

function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target > array[mid]) {
            left = mid + 1;
        } else if (target < array[mid]) {
            right = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

for (const num of numbers2) {
    const index = binarySearch(numbers1, num);
    if (index > -1) {
        numbers1.splice(index, 1);
    }
}

console.log(numbers1);