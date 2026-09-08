class Member {
  constructor(name = '名無しの権兵衛') {
    this.name = name;
  }
  greet() {
    return `こんにちは、私は${this.name}です。`;
  }
}

class BusinessMember extends Member {
  constructor(name = '名無しの権兵衛', title = '社員') {
    super(name);
    this.title = title;
  }
  greet() {
    return `${super.greet()} 〇〇社の${this.title}です。`;
  }
}

const bm = new BusinessMember('佐藤理央', '部長');
console.log(bm.greet());