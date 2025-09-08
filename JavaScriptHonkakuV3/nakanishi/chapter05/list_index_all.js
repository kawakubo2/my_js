const list = [ 'い', 'ろ', 'は', 'に', 'い', 'へ', 'と' ]; // 検索対象の配列
const keywd = 'い'; // 検索する要素
const result = [];
list.forEach((item, index) => {
    if (item === keywd) {
        result.push(index);
    }
});

console.log(result);