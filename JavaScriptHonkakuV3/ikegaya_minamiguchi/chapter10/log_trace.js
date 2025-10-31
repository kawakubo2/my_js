function call1() {
    call2()
}
function call2() {
    call3();
}
function call3() {
    // console.trace();
    const numbers = [1, 2, 3, 4, 5];
    console.log(call4());
}

call1();