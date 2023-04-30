// callstack.js

function a() {
    console.log('a開始');
    b();
    console.log('a終了');
}
function b() {
    console.log('b開始');
    c();
    console.log('b終了');
}
function c() {
    console.log('c開始');
    console.trace();
    console.log('c終了');
}

a();