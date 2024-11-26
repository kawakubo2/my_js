let name = '山田太郎';

for (const c of name) {
    console.log(c);
}
console.log('---------------');
for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}
console.log('---------------');
console.log(name[1]);
// name[1] = '川';
console.log(name);

const shikaru = '𠮟る'; // 環境依存文字
console.log(shikaru.length);
console.log([...shikaru].length);

