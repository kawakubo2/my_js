/*
関数定義
         関数名        仮引数1      仮引数2
function function-name(parameter1, parameter2, ...) {
    ...
    return return-value; // 戻り値
}
*/
function add(x, y) {
    return x + y;
}

const a = 20;
const b = 30;

const c = add(a, b); // 関数呼び出し function-name(argument1, argument2); 関数名(実引数1, 実引数2)
console.log(`${a} + ${b} = ${c}`);