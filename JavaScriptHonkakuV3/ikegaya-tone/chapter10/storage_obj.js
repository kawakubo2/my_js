const member = {
    name: '山田太郎',
    age: 38,
    weight: 70,
    height: 179,
    getBmi() {
        return this.weight / (this.height / 100) ** 2;
    }
}

console.log(`Storage保存前のBMI: ${member.getBmi()}`);

const storage = localStorage;
storage.setItem('member', JSON.stringify(member));
const data = JSON.parse(storage.getItem('member'));
const {name, age, weight, height} = data;
console.log(`${name} ${age}歳 ${weight}kg ${height}cm`);

console.log(`Storageからの復元後のBMI: ${data.getBmi()}`);
