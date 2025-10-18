const members = [
    { name: 'Taro Yamada', age: 32, weight: 72, height: 170 },
    { name: 'Jiro Suzuki', age: 45, weight: 80, height: 173 },
    { name: 'Sabro Tanaka', age: 28, weight: 68, height: 167 },
    { name: 'Shiro Sasaki', age: 49, weight: 83, height: 180 },
    { name: 'Goro Sato', age: 25, weight: 78, height: 185 },
    { name: 'Rokuro Endo', age: 35, weight: 70, height: 181 },
];

// 年代ごとの人数を調べる
const generationCounter = new Map();

for (const member of members) {
    const generation = Math.floor(member.age / 10) * 10;
    if (generationCounter.has(generation)) {
        generationCounter.set(generation, generationCounter.get(generation) + 1);
    } else {
        generationCounter.set(generation, 1);
    }
}

for (const [generation, count] of generationCounter.entries()) {
    console.log(`${generation}代: ${count}`);
}

const weightCounter = new Map();

for (const member of members) {
    const weight = Math.floor(member.weight / 10) * 10;
    if (weightCounter.has(weight)) {
        weightCounter.set(weight, weightCounter.get(weight) + 1);
    } else {
        weightCounter.set(weight, 1);
    }
}

for (const [weight, count] of weightCounter.entries()) {
    console.log(`${weight}kg代: ${count}`);
}