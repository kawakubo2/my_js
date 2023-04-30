let stack = [];

function a() {
    stack.push('a');
    console.log('call stack:' + stack.toString());
    console.log('a開始');
    console.log('aの処理');
    b();
    console.log('a終了');
    stack.pop();
    console.log('call stack:' + stack.toString());
}

function b() {
    stack.push('b');
    console.log('call stack:' + stack.toString());
    console.log('b開始');
    console.log('bの前処理');
    c();
    console.log('bの後処理');
    console.log('b終了');
    stack.pop();
    console.log('call stack:' + stack.toString());
}

function c() {
    stack.push('c');
    console.log('call stack:' + stack.toString());
    console.log('c開始');
    console.log('cの処理');
    console.log('c終了');
    stack.pop();
    console.log('call stack:' + stack.toString());
}

a();