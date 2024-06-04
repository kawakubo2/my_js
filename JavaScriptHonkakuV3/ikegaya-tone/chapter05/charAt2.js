const begin = 'ぁ'.codePointAt();
const end = 'ん'.codePointAt();
for (let ch = begin; ch <= end; ch++) {
    console.log(`文字コード ${ch} の文字は ${String.fromCharCode(ch)}`);
}

console.log(String.fromCharCode(12420, 12414, 12384));