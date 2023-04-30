let m = new Map();
m.set('dog', 'ワンワン');
m.set('cat', 'ニャー');
m.set('mouse', 'チュー');

for (let key of m.keys()) {
    console.log(key);
}
for (let value of m.values()) {
    console.log(value);
}
for (let [key, value] of m.entries()) {
    console.log(`${key}: ${value}`);
}

m.delete('dog');
console.log(m.size);

m.clear();
console.log(m.size);

let fruits = ['バナナ', 'リンゴ', 'ミカン', 'バナナ', 'リンゴ', 'ナシ', 'バナナ', 
              'バナナ', 'ミカン', 'ミカン', 'ミカン', 'ミカン'];

/*
    バナナ: 4,
    リンゴ: 2,
    ミカン: 2,
    ナシ  : 1
*/

const fruitMap = new Map();

for (let f of fruits) {
    if (!fruitMap.has(f)) {
        fruitMap.set(f, 0);
    }
    fruitMap.set(f, fruitMap.get(f) + 1);
}

fruitsArray = [];
for (let [fruit, count] of fruitMap) {
    fruitsArray.push([fruit, count]);
}
fruitsArray.sort(function(f1, f2) {
    return f2[1] - f1[1];
});
for (let fruit of fruitsArray) {
    console.log(`${fruit[0]}: ${fruit[1]}`);
}



countries = ['フランス', 'イタリア', 'イギリス', 'ドイツ', 'イタリア', 'スペイン', 'フランス',
             'ドイツ', 'イタリア', 'スペイン', 'フランス', 'イタリア', 'イギリス'];

const countryMap = new Map();
for (let country of countries) {
    if (!countryMap.has(country)) {
        countryMap.set(country, 0);
    }
    countryMap.set(country, countryMap.get(country) + 1);
}

console.log('---< sort方法1 >---')
const countriesArray = [];
for (let [country, count] of countryMap.entries()) {
    countriesArray.push([country, count]);
}

countriesArray.sort(function(c1, c2) {
    return c2[1] - c1[1];
});

for (const country of countriesArray) {
    console.log(`${country[0]}: ${country[1]}`);
}

console.log('---< sort方法2 >---')
let rank = new Map([...countryMap.entries()].sort((c1, c2) => c2[1] - c1[1]));

for (let [country, count] of rank) {
    console.log(`${country}: ${count}`);
}

let m2 = new Map();
const key = {};
m2.set(key, 'hoge');
console.log(m2.get(key));