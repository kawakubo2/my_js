const keys = [1, 2, 3];
const values = ['あ', 'い', 'う'];

const data = new Map(
    keys.map(function(value, index) {
        return [value, values[index]];
    })
);

console.log(data);