const str = "にわにはにわにわとりがいる";

let count = 0;
let keywd = "にわ";
let pos = str.indexOf(keywd);
while (pos > -1) {
    count++;
    pos = str.indexOf(keywd, pos + keywd.length);
}

console.log(`${count}件がヒットしました。`);

console.log(str.replaceAll(keywd, ''));
// replaceAllがないバージョンでの解き方
console.log(str.split('にわ').join(''));