import Member from './member.js'

class BusinessMember extends Member {
    constructor(firstName, lastName, clazz) {
        super(firstName, lastName);
        this.clazz = clazz;
    }
    getName() {
        return super.getName() + '／役職: ' + this.clazz;
    }
}

const bm  = new BusinessMember('太郎', '山田', '課長');
console.log(bm.getName());