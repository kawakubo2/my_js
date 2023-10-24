/*
以下のようにあるオブジェクトAが別のオブジェクトBをプロパティとして保持し、
オブジェクトBのメンバを使ってAの機能の拡張することを委譲(delegate)と呼ぶ。
この時、A has a Bの関係であるという --- has-a関係(委譲)
*/
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
}

const q = new Queue(10, 20, 30);
q.enqueue(40);
console.log(q.dequeue());
console.log(q.peek());
