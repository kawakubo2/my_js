const add = (val1, val2) => val1 + val2;
const minus = (val1, val2) => val1 - val2;

const calcAndDisp = (calc, disp, val1, val2) => disp(calc(val1, val2));

calcAndDisp(add, console.log, 3, 2);

/*
ブラウザ環境で動作する
calcAndDisp(minus, alert, 3, 2);
*/