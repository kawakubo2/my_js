const array1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const a = numbers.splice(2, 3, 'X', 'y');
console.log(a);
console.log(numbers);

function is_range(num, begin, end) {
    return num >= begin && num <= end;
}

function array_splice(array, pos, num, ...args) {
    if (!is_range(pos, 0, array.length - 1)) throw new Error("indexが範囲外です。");
    if (!is_range(pos + num - 1, 0, array.length - 1)) throw new Error("indexが範囲外です。");
    let removed = [];
    let size = array.length;
    for (let i = 0; i < num; i++) {
        removed.push(array[pos + i]);
        if (pos + i + num < size) {
            array[pos + i] = array[pos + i + num];
        }
    }
    for (let i = 0; i < num; i++) array.pop();
    return removed;
}

console.log(array_splice(array1, 2, 3));
console.log(array1);