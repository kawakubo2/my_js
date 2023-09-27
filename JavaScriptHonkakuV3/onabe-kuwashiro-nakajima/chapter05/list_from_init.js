const list = Array.from(
    { length: 5 },
    function(value, index) {
        return index * 10;
    }
);

console.log(list);

const list2 = Array.from('ABCDE', (v, i) => v.repeat(i + 1));
console.log(list2);

const list3 = Array.from('JavaScript');
console.log(list3);
