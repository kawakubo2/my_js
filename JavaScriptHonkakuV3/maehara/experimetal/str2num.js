const numStr = "12345";

function str2num(str) {
    let ret = 0;
    for (let i = 0; i < str.length; i++) {
        ret = ret * 10 + (str[i] - '0');
    }
    return ret;
}

const answer = str2num(numStr);
const temp = answer.toFixed(2);
console.log(typeof answer === 'number');
console.log(temp);