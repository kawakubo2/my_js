class Student {
    constructor(number, name, score) {
        this.number = number;
        this.name = name;
        this.score = score;
    }
    [Symbol.iterator]() {
        let current = 0;
        let that = this;
        return {
            next() {
                return current < that.score.length ?
                    {value: that.score[current++], done: false} :
                    {done: true};
            }
        };
    }
}

let itr = new Student('A001', '山田太郎', [70, 78, 62, 90, 83]);
for (const s of itr) {
    console.log(s);
}