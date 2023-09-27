const member = {
    name: '山田太郎',
    age: 38,
    weight: 86,
    height: 181,
    bmi: function() {
        return this.weight / (this.height / 100) ** 2;
    }
};

console.log(`${member.name}さんのBMI値は${member.bmi()}`);