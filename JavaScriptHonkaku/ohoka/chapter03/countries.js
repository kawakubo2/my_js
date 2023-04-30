let countries = [
    'イタリア', 'イギリス', 'スペイン', 'イタリア', 'スペイン', 'ドイツ', 'イギリス', 'イタリア', 'フランス',
    'イタリア', 'フランス', 'イタリア', 'イギリス', 'イギリス', 'スペイン', 'イタリア', 'イタリア', 'フランス', 
    'イタリア', 'スペイン', 'スペイン', 'フランス', 'フランス', 'フランス', 'イタリア', 'イギリス', 'イタリア', 
    'イタリア', 'イタリア', 'イギリス', 'スペイン', 'フランス', 'フランス', 'スペイン', 'スペイン', 'イタリア', 
    'ドイツ', 'ドイツ', 'イタリア', 'フランス'];

let counter = new Map();

for (let country of countries) {
    if (counter.has(country)) {
        counter.set(country, counter.get(country) + 1)
    } else {
        counter.set(country, 1);
    }
}

for (let [country, cnt] of counter) {
    console.log(`${country}: ${cnt}`);
}