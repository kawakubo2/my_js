const str = 'にわにはにわにわとりがいる';
const array = str.split('にわ');
// for (const s of array) {
//     console.log(s);
// }
console.log(array.join('二羽'));

const s2 = "abc,def,hij,klm";
const array2 = s2.split(',');
console.log(array2);
console.log(array2.join('---'));

console.log(s2.split(',').join(':')); // ---> ES2021 s2.replaceAll(',', ':')