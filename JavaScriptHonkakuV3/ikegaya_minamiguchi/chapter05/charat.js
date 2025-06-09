const str1 = 'JavaScript';

for (let i = 0; i < str1.length; i++) {
    console.log(str1.charAt(i) + ': ' + str1.codePointAt(i));
}

const name = '山田太郎';
for (let i = 0; i < name.length; i++) {
    console.log(name.charAt(i) + ': ' + name.codePointAt(i));
}