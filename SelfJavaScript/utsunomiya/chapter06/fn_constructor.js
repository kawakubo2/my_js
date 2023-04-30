const add = new Function("val1", "val2", "return val1 + val2;");
const result = add(1, 2);
console.log(result);

const sub = new Function("val1,val2", "return val1 - val2;");
const result2 = sub(1, 2);
console.log(result2);

const arg1 = "base,height";
const formula1 = "return base * height / 2;";
const func = new Function(arg1, formula1);
console.log(func(10, 20));