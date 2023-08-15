const list = ['い', 'ろ', 'は', 'に', 'い', 'へ', 'と'];
const keywd = 'い';
const result = [];

list.forEach(function(v, i) {
    if (v === keywd) {
        result.push(i);
    }
});

console.log(result);

const result2 = list
                .map((e, i) => {
                    if (e === keywd) {
                        return i;
                    }
                })
                .filter(e => e !== undefined);
console.log(result2);