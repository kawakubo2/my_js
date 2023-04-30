class Member {
    #name;
    #age;

    get name() {
        return this.#name;
    }
    set name(name) {
        this.#name = name;
    }
    get age() {
        return this.#age;
    }
    set age(age) {
        this.#age = age;
    }
}

const m1 = new Member();
m1.name = '山田太郎';
m1.age = 38;
console.log(`${m1.name}さんの年齢は${m1.age}歳です。`);
const m2 = new Member();
m2.name = '横山花子';
m2.age = 27;
console.log(`${m2.name}さんの年齢は${m2.age}歳です。`);

