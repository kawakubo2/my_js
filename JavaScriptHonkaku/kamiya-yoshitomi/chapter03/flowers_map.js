// flowers_map.js
flowers = ['Tulip', 'Rose', 'Tande Lion', 'Sun flower', 'Rose', 'Morning Glory',
           'Sun flower', 'Tulip', 'Rose', 'Sun flower', 'Tande Lion'];

const flower_counter = new Map();

for (const flower of flowers) {
    if (flower_counter.has(flower)) {
        flower_counter.set(flower, flower_counter.get(flower) + 1);
    } else {
        flower_counter.set(flower, 1);
    }
}

for (const [ flower, count ] of flower_counter.entries()) {
    console.log(`${flower}: ${count}`);
}