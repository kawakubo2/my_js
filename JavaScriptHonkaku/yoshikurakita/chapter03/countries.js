let answer = [
    'イギリス','フランス','イタリア','イタリア','フランス',
    'フランス','スペイン','イギリス','フランス','イタリア',
    'イタリア','スペイン','フランス','フランス','スペイン',
    'イタリア','フランス','イタリア','ドイツ','スペイン',
    'イタリア','イタリア','フランス','ドイツ','イタリア',
    'イギリス','フランス','イギリス','イタリア','スペイン',
    'スペイン','イタリア','イギリス','スペイン','イタリア',
    'ドイツ','イギリス','イタリア','スペイン','イタリア'
];

let counter = new Map();

for (let country of answer) {
    if (counter.has(country)) {
        counter.set(country, counter.get(country) + 1);
    } else {
        counter.set(country, 1);
    }
}

for (let [country, count] of counter) {
    console.log(`${country}: ${count}`);
}