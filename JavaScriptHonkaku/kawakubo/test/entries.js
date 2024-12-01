const animals = {
    dog: 'イヌ',
    cat: 'ネコ',
    hamster: 'ハムスター',
    rabbit: 'ウザキ'
};

const list = [...Object.entries(animals)];
console.log(Array.isArray(list));
console.log(list);