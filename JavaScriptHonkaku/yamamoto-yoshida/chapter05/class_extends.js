import Member from './member.js'

class BusinessMember extends Member {
    work() {
        return this.getName() + 'は働いています。';
    }
}

const bm = new BusinessMember('太郎', '山田');
console.log(bm.getName());
console.log(bm.work());