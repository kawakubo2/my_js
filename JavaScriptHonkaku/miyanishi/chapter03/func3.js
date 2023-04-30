const add = function(x, y) {
    return x + y;
};

console.log(add(10, 20));

let xyz = add;

console.log(xyz(100, 200));