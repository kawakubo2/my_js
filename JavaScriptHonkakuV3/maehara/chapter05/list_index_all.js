const list = ['い', 'ろ', 'は', 'に', 'い', 'へ', 'と'];
const keywd = 'い';
let result = [];
list.forEach(function(v, i) {
    if (v === keywd) {
        result.push(i);
    }
});
console.log(result);