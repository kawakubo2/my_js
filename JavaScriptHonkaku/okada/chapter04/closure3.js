
function f() {
    let members = [{name: '山田太郎', age: 68},{name: '横山花子', age: 62}, {name: '田中一郎', age: 58},
                {name: '山本久美子', age:58}, {name: '鈴木次郎', age: 68}];
    let a = [];
    let i;
    for (i = 0; i < members.length; i++) {
        a[i] = (function(x) {
            return function() {
                return ++(members[x].age);
            }
        })(i);
    }
    return a;
}

let a = f();
//console.log(a[1]());
for (let i = 0; i < 5; i++) {
    console.log(a[i]());
}