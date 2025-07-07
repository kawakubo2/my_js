class Member {
    #firstName = '';
    #lastName = '';
    #birthdate = null;
    #height = 0.0;
    #weight = 0.0
    constructor(firstName, lastName, birthdate, height, weight) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#birthdate = birthdate;
        this.height = height;
        this.weight = weight;
    }

    get firstName() {
        return this.#firstName;
    }

    get lastName() {
        return this.#lastName;
    }

    get height() {
        return this.#height;
    }

    set height(value) {
        if (!(typeof(value) === 'number' && value > 0)) {
            throw new Error(`身長は0より大きい数値を入力してください: ${value}`);
        }
        this.#height = value;
    }

    get weight() {
        return this.#weight;
    }

    set weight(value) {
        if (!(typeof(value) === 'number' && value > 0)) {
            throw new Error(`体重は0より大きい数値を入力してください: ${value}`);
        }
        this.#weight = value;
    }


    getName() {
        return this.#lastName + this.#firstName;
    }

    getAge() {
        const today = new Date();
        let age = today.getFullYear() - this.#birthdate.getFullYear();
        if (today.getMonth() < this.#birthdate.getMonth() ||
            today.getMonth() ===  this.#birthdate.getMonth() &&
            today.getDate() < this.#birthdate.getDate()
        ) {
            age--;
        }
        return age;
    }
}

const mem1 = new Member('裕子', '星山', new Date(1990, 6, 7), 155, 48);
const mem2 = new Member('勝男', '佐藤', new Date(1975, 6, 8), 165, 60);

mem2.height = 166; // set height(value)
// mem2.height = -120;

console.log(`${mem1.getName()}さんは${mem1.getAge()}歳、身長は${mem1.height}cmです。`);
console.log(`${mem2.getName()}さんは${mem2.getAge()}歳、身長は${mem2.height}cmです。`); // mem1.height ---> get height()

console.log(mem1.firstName); // get firstName()
mem1.firstName = '久美子'; // set firstname()がないのでエラー


// console.log(`${mem1.lastName}${mem1.firstName}さんは${mem1.getAge()}歳です。`);