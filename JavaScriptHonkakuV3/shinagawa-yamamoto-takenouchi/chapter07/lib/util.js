const AUTHOR = 'YAMADA, yoshihiro';

export function getTriangleArea(base, height) {
    return base * height / 2;
}
export class Member {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getName() {
        return this.lastname + this.firstname;
    }
}