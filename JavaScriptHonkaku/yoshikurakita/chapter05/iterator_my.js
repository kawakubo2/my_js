class MyIterator {
    constructor(data) {
            this.data = data;
        }
        [Symbol.iterator]() {
            let current = 0;
            let that = this;
            return {
                next() {
                    return current < that.data.length ? { value: that.data[current++], done: false } : { done: true }
                }
            }
        }
}


let temp = new MyIterator(['one', 'two', 'three']);
let itr = temp[Symbol.iterator]();
while (true) {
    let res = itr.next();
    if (res.done) break;
    console.log(res.value);
}