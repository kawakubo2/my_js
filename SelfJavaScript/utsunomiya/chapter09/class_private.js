class Counter {
    #count = 0;

    #print() {
        console.log(this.#count);
    }

    increment() {
        this.#count++;
        this.#print();
    }
}

const counter = new Counter();
for (let i = 0; i < 10; i++) {
    counter.increment();
}