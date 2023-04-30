const s = new Set();
/*
s.add(10);
s.add(5);
s.add(100);
s.add(50);
*/
s.add(10).add(5).add(100).add(50);
console.log(s.add(5));

console.log(s.has(100));
console.log(s.size);
for (const val of s.values()) {
    console.log(val);
}

for (const val of s) {
    console.log(val);
}

s.delete(100);
console.log(s.size);
s.clear();
console.log(s.size);
