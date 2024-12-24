const email = 'taro@yamada.com';
const index = email.indexOf('@');
console.log(`@の位置: ${index}`);
const local = email.substring(0, index);
const domain = email.substring(index + 1);
console.log(`ローカル部: ${local}`);
console.log(`ドメイン部: ${domain}`);

const [local2, domain2] = email.split('@');
console.log(`ローカル部: ${local2}`);
console.log(`ドメイン部: ${domain2}`);

const ip = "192.168.10.220";

const a = ip.split('.').map(e => Number(e));
console.log(a);