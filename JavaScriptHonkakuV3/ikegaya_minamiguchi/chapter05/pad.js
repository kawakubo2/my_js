const numbers = ['123', '34', '4567', '7', '890123'];
for (const num of numbers) {
    console.log(num.padStart(10));
}

const langs = ['ActionScript', 'Java', 'Python', 'PHP', 'C', 'C#', 'JavaScript', 'TypeScript'];

let max = langs[0].length;
for (const lang of langs) {
    if (lang.length > max) max = lang.length;
}
let str = '┌' + '─'.repeat(max) + '┐';
let first = true;
for (const lang of langs) {
    if (!first) {
        str = '├' + '─'.repeat(max) + '┤';
    } else {
        first = false;
    }
    console.log(str);
    console.log('│' + lang.padEnd(max) + '│');
}
str = '└' + '─'.repeat(max) + '┘';
console.log(str);