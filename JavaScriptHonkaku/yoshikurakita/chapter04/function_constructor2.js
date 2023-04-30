let param1 = 'base,height';
let expr1 = 'return base * height / 2';

let func1 = new Function(param1, expr1);
console.log(func1(10, 5));

/*
 関数リテラル、無名関数、匿名関数
*/
const get_triangle = function(base, height) {
    return base * height / 2;
}

console.log(get_triangle(10, 6));
let xyz = get_triangle;
console.log(xyz(8, 7));

let get_triangle2 = (base, height) =>  base * height / 2;
console.log(get_triangle2(100, 200));