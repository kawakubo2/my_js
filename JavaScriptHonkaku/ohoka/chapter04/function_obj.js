let param = 'base,height';
let formula = 'return base * height / 2;';
let getTriangle = new Function(param, formula);
console.log(getTriangle(5, 8));