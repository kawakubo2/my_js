class MyIterator {
    constructor(data) {
        this.data = data;
        this[Symbol.iterator] = function* () {
            let current = 0;
            const that = this;
            while (current < that.data.length) {
                yield that.data[current++];
            }
        }
    }
}

const itr = new MyIterator([1, 2, 3, 4, 5, 6]);
for (const n of itr) {
    console.log(n);
}