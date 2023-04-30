const email = "tomo.kawakubo@gmail.com";

const pos = email.indexOf("@");
console.log(`ローカル部: ${email.substr(0, pos)}`);
console.log(`ドメイン部: ${email.substr(pos + 1)}`);

let [ local, domain] = email.split('@');
console.log(`ローカル部: ${local}`);
console.log(`ドメイン部: ${domain}`);