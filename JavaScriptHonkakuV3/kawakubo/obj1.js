// オブジェクトリテラル
const member = {
    id: 101,
    name: '斎藤太郎',
    height: 180,
    weight: 85,
    bmi: function() {
        return this.weight / (this.height / 100) ** 2
    }
};

console.log(member.bmi());