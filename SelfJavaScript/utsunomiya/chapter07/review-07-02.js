let val = 'グローバル';

function fn1() {
    let val = '関数内';
    if (Math.random() < 0.9) {
        console.log(`fn1のifブロック内: ${val}`);
        fn1();
    }

    function fn2() {
        console.log(`fn2: ${val}`);
    }
    console.log(`fn1: ${val}`);
    fn2();
    return val;
}

function fn3() {
    console.log(val);
}

const result = fn1();
console.log(result);
fn3();