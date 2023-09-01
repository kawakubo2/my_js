const list = [10, 42, null, 73, 8];

console.log(list.flatMap(function(value) {
    if (value == null) return [];
    return value;
}));

const list2 = [10, 42, null, 73, 8];

/*
console.log(list2.filter(function(n) {
    if (n !== null) {
        return n;
    }
}));
*/
console.log(list2.filter(n => n !== null));
