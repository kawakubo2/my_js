/*
0
0.01
0.02
0.03
・
・
・
0.97
0.98
0.99
1

*/

let x = 1;
while (x <= 100) {
    console.log(x / 100);
    x += 1;
}
console.log('--- for命令 ---')
for (let i = 1; i <= 100; i++) {
    console.log(i / 100);
}

/*

    *
   ***
  *****
 *******
*********

*/

const D = 30;
for (let i = 1; i <= D; i++) {
    let s = '';
    for (let j = 0; j < D - i; j++) {
        s += ' ';
    }
    for (let j = 0; j < i * 2 - 1; j++) {
        s += '*';
    }
    for (let j = 0; j < D - i; j++) {
        s += ' ';
    }
    console.log(s);
}

