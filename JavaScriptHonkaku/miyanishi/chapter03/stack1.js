// ((1 + 2) * (8 / 4))

let stack = [];

function a() {
    stack.push('a')
    console.log(stack);
    console.log('処理A');
    b();
    stack.pop();
    console.log(stack);
}
function b() {
    stack.push('b')
    console.log(stack);
    console.log('処理B');
    c();
    stack.pop();
    console.log(stack);
}
function c() {
    stack.push('c')
    console.log(stack);
    console.log('処理C');
    stack.pop();
    console.log(stack);
}

a();


