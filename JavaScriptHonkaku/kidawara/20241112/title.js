/*
how to learn programming language
             ↓
How To Laearn Programming Language
*/
function capitalize(s) {
    return s[0].toUpperCase() + s.substring(1).toLowerCase();
}

console.log(capitalize('jAvaSCipT'));

const str = "how to learn python";

const list = str.split(' ');
let result = '';
for (const elem of list) {
    result += capitalize(elem) + ' ';
}
console.log(result);