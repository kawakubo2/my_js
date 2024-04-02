const member = {
    name: "山田太郎",
    age: 28,
    weight: 78,
    height: 175,
    getBmi: function() {
        return this.weight / (this.height / 100) ** 2;
    }
};

const storage = localStorage;
storage.setItem("member", JSON.stringify(member));
const m = JSON.parse(storage.getItem("member"));
let member2 = {};
Object.assign(member2, m, { getBmi } = member);
console.log(`${member2.name}さんの年齢は${member2.age}歳です。`);
console.log(member2.getBmi());