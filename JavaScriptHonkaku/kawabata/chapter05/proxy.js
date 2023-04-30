let colors = { 'red': '赤', 'yellow': '黄色' }

let proxy = new Proxy(colors, {
    get(colors, prop) {
        return prop in colors ? colors[prop] : '?';
    }
});

console.log(proxy['red']);
console.log(proxy[proxy.nothing]);

let countries = [{'イギリス': 2, 'ドイツ': 1}, {'フランス': 3}, {'イタリア': 2}, {'イギリス': 1}, {'ドイツ': 4},
                 {'イタリア': 3}, {'スペイン': 3}, {'イタリア': 1}, {'フランス': 2}, 
                 {'イタリア': 1, 'スペイン': 3, 'フランス': 3}];
let result = {};

let counter = new Proxy(result, {
    set(result, prop, val) {
        if (prop in result) {
            result[prop] += val;
        } else {
            result[prop] = val;
        }
    },
    get(result, prop) {
        return result[prop];
    }
});


for (let country of countries) {
    for (let c in country) {
        counter[c] = country[c];
    }
}
for (let country in result) {
    console.log(country + ':' + result[country]);
} 
