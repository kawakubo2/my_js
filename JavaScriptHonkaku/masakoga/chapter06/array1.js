let s = "A B D E F";
let a = s.split(' ');
console.log(a);

let pos = a.indexOf('C');
if (pos > -1) {
    a.splice(pos, 1);
} else {
    a.push('C');
}

console.log(a);