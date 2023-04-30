class MyIterator {
    constructor(data) {
        this.data = data;
    }

    [Symbol.iterator]() {
        let current = 0;
        let that = this;
        return {
            next() {
                return current < that.data.length ?
                {value: that.data[current++], done: false} :
                {done: true}
            }
        };
    }
}

itr = new MyIterator(['one', 'two', 'three']);

for (let val of itr) {
    console.log(val);
}