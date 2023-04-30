class Member {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getName() {
        return this.lastName + this.firstName;
    }
}

const mem = new Member('太郎', '山田');
console.log(mem.getName());