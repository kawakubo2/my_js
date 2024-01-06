const fruits = ['banana', 'apple', 'strawberry', 'grape', 'pear'];
let max = 0;
for (const f of fruits) {
    if (f.length > max) max = f.length;
}

console.log('┌' + '─'.repeat(max) + '┐');
for (const f of fruits) {
    console.log('│' + f.padEnd(max) + '│');
}
console.log('└' + '─'.repeat(max) + '┘');