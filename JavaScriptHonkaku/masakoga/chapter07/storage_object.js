class Member {
    constructor(number, name, height = 1) {
        this.number = number;
        this.name = name;
        this.height = height;
    }
    toString() {
        return `Member class: ${this.number} ${this.name} ${this.height}cm`;
    }
    stdWeight() {
        return 22 * (this.height / 100) ** 2;
    }
}

let storage = localStorage;
let mem = new Member(101, '山田太郎', 180);
storage.setItem('mem', JSON.stringify(mem));
let dat = (Member)(JSON.parse(storage.getItem('mem')));
console.log(dat.toString());