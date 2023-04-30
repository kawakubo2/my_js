class MyIterator {
    constructor(data) {
        this.data = data;
        this[Symbol.iterator] = function* () {
            let current = 0;
            let that = this;
            while (current < that.data.length) {
                yield that.data[current++];
            }
        }
    }
}

const itr = new MyIterator(['JavaScript', 'Python', 'Java']);
for (const lang of itr) {
    console.log(lang);
}
