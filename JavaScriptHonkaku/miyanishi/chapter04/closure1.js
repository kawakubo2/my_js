// function func1() {
//     let n = 1;
//     return function() {
//         return n++;
//     }
// }
// 
// let closure1 = func1();
// console.log(closure1())
// console.log(closure1())
// console.log(closure1())

function func2() {
    let a = [];
    for (let i = 0; i < 3; i++) {
        a.push(
            (function(x) {
                return function(i) {
                    return i;
                }
            })(i)
        );
    }
    return a;
}

let ary = func2();
console.log(ary[0]())
console.log(ary[1]())
console.log(ary[2]())