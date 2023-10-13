let i = 0;
const member = {
    name : '山田太郎',
    birth: new Date('1970-06-25'),
    [`memo${++i}`]: '正規会員',
    [`memo${++i}`]: '支部会長',
    [`memo${++i}`]: '関東'
};

console.log(member);
