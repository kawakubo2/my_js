const member = {
    name: '山田太郎',
    age: 28,
    weight: 78,
    height: 175
};

for (const key in member) {
    console.log(`${key}: ${member[key]}`);
}
console.log('Object#entries(assoc_array) ---> [key, value]として取り出せる')
for (const [key, value] of Object.entries(member)) {
    console.log(`${key}: ${value}`);
}