function mul(x, y) {
    console.log('a');
    console.log('b');
    console.log('c');
    console.log('d');
    console.log('e');
    console.log('f');
    console.log('g');
    console.log('h');
    console.log('i');
    console.log('j');
    return x * y;
}
console.group('上位グループ');
for (let i = 1; i <= 9; i++) {
    console.group(`下位グループ${i}`);
    for (let j = 1; j <= 9; j++) {
        const answer = mul(i, j);
        console.log(answer);
    }
    console.groupEnd();
}
console.groupEnd();