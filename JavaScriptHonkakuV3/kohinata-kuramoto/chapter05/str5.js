const langs = ['C#', 'Go', 'Java', 'Rust', 'Python'];

const maxLength = Math.max(...langs.map(s => s.length));

console.log('+' + '-'.repeat(maxLength) + '+');
langs.forEach(s => console.log('|' + s.padStart(maxLength) + '|'));
console.log('+' + '-'.repeat(maxLength) + '+');