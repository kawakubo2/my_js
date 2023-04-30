const fruit1 = {
    apple: function() {
        console.log('リンゴ');
    }
}

const fruit2 = Object.create(fruit1);
console.log(fruit2);
fruit2.__proto__.apple();

fruit2.banana = function() {
    console.log('バナナ');
};

const fruit3 = Object.create(fruit2);
console.log(fruit3);
fruit3.__proto__.banana();
fruit3.__proto__.__proto__.apple();

fruit3.melon = function() {
    console.log('メロン');
};

console.log('fruit3', fruit3);
console.log('fruit3.__proto__', fruit3.__proto__);
console.log('fruit3.__proto__.__proto__' , fruit3.__proto__.__proto__);
fruit3.apple();
fruit3.banana();
fruit3.melon();