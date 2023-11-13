class Queue {
    #list = [];
    constructor(...data) {
        this.#list = data;
    }
    enqueue(elem) {
        this.#list.push(elem);
    }
    dequeue() {
        return this.#list.shift();
    }
    peek() {
        return this.#list[0];
    }
    [Symbol.iterator]() {
        const that = this;
        let index = 0;
        return {
            next() {
                return index === that.#list.length
                    ?
                    {
                        done: true
                    }
                    :
                    {
                        done: false,
                        value: that.#list[index++]
                    };
            }
        }
    }
}

const q = new Queue(10, 20, 30);
q.enqueue(40);
console.log(q.dequeue());
console.log(q.peek());
console.log('---< 実装したイテレータを使用してfor ofで要素を取り出す >---');
for (const elem of q) {
    console.log(elem);
}