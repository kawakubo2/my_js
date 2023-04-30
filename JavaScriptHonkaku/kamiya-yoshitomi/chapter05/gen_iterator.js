class MyIterator {
    constructor(data) {
        this.data = data;
        this[Symbol.iterator] = function* () {
            let current = 0;
            let that = this;
            while (current < that.data.length) {
                yield that.data[current++];
            }
        };
    }
}
const itr = new MyIterator([1, 2, 4, 8, 16, 32]);
for (const d of itr) {
    console.log(d);
}