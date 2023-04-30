function fn(obj) {
    obj.arg1 = obj.arg1 ? obj.arg1 : '初期値1';
    obj.arg2 = obj.arg2 ? obj.arg2 : '初期値2';
    console.log(obj.arg1, obj.arg2);
}

console.log(fn instanceof Function);

const params = { arg2: "引数2" };
fn(params);

const bmi = function(obj) {
    return obj.weight / (obj.height / 100) ** 2;
}

console.log(bmi instanceof Function);

const member = { name: '山田太郎', age: 38, weight: 70, height: 172 };
console.log(bmi(member));