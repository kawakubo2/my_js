let data = ['JavaScript', 'Python', 'PHP', 'Ruby', 'Perl'];

console.log(data[0]);
console.log(data[1]);
console.log(data[2]);
console.log(data[3]);
console.log(data[4]);

console.log("---< for ～ of >---");
for (const lang of data) {
    console.log(lang);
}
console.log("---< for文 >---");
for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
}