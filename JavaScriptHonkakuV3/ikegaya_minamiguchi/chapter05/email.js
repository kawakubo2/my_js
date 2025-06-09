const email = 'tomo.kawakubo@gmail.com';

const pos = email.indexOf('@');
console.log(email.includes('@'));

const localPart = email.substring(0, pos);
const domainPart = email.substring(pos + 1);

console.log(`ローカル部: ${localPart}`);
console.log(`ドメイン部: ${domainPart}`);