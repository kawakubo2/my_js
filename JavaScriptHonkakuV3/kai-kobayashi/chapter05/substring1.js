const msg = 'hELLo';

console.log(msg.substring(0, 1) + msg.substring(1));
console.log(msg.substring(0, 1).toUpperCase() + msg.substring(1).toLowerCase());

const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i = 0; i < str.length; i += 5) {
    console.log(str.substring(i, i + 5));
}
