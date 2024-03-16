/*
    *
   ***
  *****
 *******
*********
*/
function repeatChars(char, num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += char;
    }
    return result;
}
const DANSU = 50;
for (let i = 1; i <= DANSU; i++) {
    let s = '';
    s += repeatChars(' ', DANSU - i) + repeatChars('*', i * 2 - 1);
    console.log(s);
}