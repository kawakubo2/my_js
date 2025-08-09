const email = 'tomo.kawakubo@gmail.com';

const pos = email.indexOf('@');
if (pos > -1) {
    console.log(`ローカル部: ${email.substring(0, pos)} ドメイン部: ${email.substring(pos + 1)}`);
} else {
    console.log(`Emailの形式に誤りがあります。`);
}

const [local_part, domain_part] = email.split('@');
console.log(`ローカル部: ${local_part} ドメイン部: ${domain_part}`);

const tel = '092-123-4567';

const [shigai, shinai, kanyusha] = tel.split('-');
console.log(`市外局番: ${shigai}`);
console.log(`市内局番: ${shinai}`);
console.log(`加入者番号: ${kanyusha}`);