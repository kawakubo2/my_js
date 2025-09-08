const list = [ 'い', 'ろ', 'は', 'に', 'い', 'へ', 'と' ]; // 検索対象の配列
const keywd = 'い'; // 検索する要素

const numbers = [1, 5, 2, 1, 1, 4, 1, 3, 2, 9, 4, 1];
const n = 1;

function list_index_all(array, keyword) {
    const result = [];
    array.forEach((value, index) => {
        if (value === keyword) {
            result.push(index);
        }
    });
    return result;
}

console.log(list_index_all(list, keywd));
console.log(list_index_all(numbers, n));