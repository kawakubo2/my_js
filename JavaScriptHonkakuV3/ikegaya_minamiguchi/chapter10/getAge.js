const readline = require('readline-sync');

function getAge(birthdate) {
    const birthRegex = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;
    if (!birthRegex.test(birthdate)) {
        console.log('生年月日の形式が正しくありません。');
        return null;
    }
    const [ birthYear, birthMonth, birthDay] = 
        birthdate.split('-').map(e => Number.parseInt(e, 10));
    const now = new Date();
    let age = now.getFullYear() - birthYear;
    if (now.getMonth() + 1 < birthMonth ||
        (now.getMonth() + 1 === birthMonth && now.getDate() < birthDay)) {
        age -= 1;
    }   
    return age;
}

const birthdate = readline.question('生年月日(YYYY-MM-DD): ');
const age = getAge(birthdate);
if (age !== null) {
    const birth = new Date(birthdate);
    console.log('%d年%d月%d日生まれの人の年齢は%d歳です。', 
        birth.getFullYear(), 
        birth.getMonth() + 1, 
        birth.getDate(), 
        age);
}

console.log('私の名前は', '田中一郎', 'です。年齢は', 38, '歳です')