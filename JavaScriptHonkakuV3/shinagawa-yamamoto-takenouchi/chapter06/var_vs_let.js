{
    var a = 10;
    var a = 'abc';
    console.log(`a = ${a}`);

    let b = true;
    console.log(`b = ${b}`);

    let result = '';
    /*
    iやcはブロックの中でしか使用できない
    ブロックスコープ
    */
    for (let i = 0; i < 10; i++) {
        let c = 'a';
        result += c;
    }
    console.log(result);

    result = '';
    for (let i = 0; i < 10; i++) {
        let c = '★';
        result += c;
    }
    console.log(result);

    let total = 0;
    function sum() {
        for (let i = 1; i <= 10; i++) {
            total += i;
        }
    }
    sum();
    console.log(total);

    function decrement() {
        total--;
    }
    decrement();
    console.log(total);

    function print_total() {
        console.log(total);
    }

    let aaa = 'ABC';
}
