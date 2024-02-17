class Member {

    static cache = new Map();

    constructor(name) {
        this.name = name;
    }

    static of(name) {
        if (this.cache.has(name)) {
            return this.cache.get(name); 
        }
        const m = new Member(name);
        this.cache.set(name, m);
        return m;
    }
}

const m1 = Member.of('田中譲二');
const m2 = Member.of('田中譲二');
console.log(m1 === m2);