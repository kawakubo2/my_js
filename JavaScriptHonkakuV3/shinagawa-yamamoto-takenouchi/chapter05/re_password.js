/*
 以下の(1)～(5)の条件を満たすこと
 (1) 英小文字が必ず1個以上含まれる
 (2) 英大文字が必ず1個以上含まれる
 (3) 数字が必ず1個以上含まれる
 (4) 英数字以外が含まれない
 (5) 全体の文字数は6桁～10桁
*/

const pass_ok = "Ab123XYx";
const pass_ng = "1ABC23XYZ";

function test(pass) {
    let lower_alpha = 0;
    let upper_alpha = 0;
    let numeric = 0; 
    for (let i = 0; i < pass.length; i++) {
        const c = pass.charAt(i);
        if (!((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9'))) {
            return false;
        }
        if (c >= 'A' && c <= 'Z') {
            upper_alpha++;
        }
        if (c >= 'a' && c <= 'z') {
            lower_alpha++;
        }
        if (c >= '0' && c <= '9') {
            numeric++;
        }
    }
    if (upper_alpha === 0 || lower_alpha === 0 || numeric === 0) {
        return false;
    }
    if (pass.length < 6 || pass.length > 10) {
        return false;
    }
    return true;
}

console.log(`${pass_ok}: ${test(pass_ok) ? '承認': '拒否'}`);
console.log(`${pass_ng}: ${test(pass_ng) ? '承認': '拒否'}`);

 
