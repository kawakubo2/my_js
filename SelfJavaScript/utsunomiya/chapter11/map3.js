const engineers = [
    {name: 'Yamada', langs: ['Python', 'JavaScript']},
    {name: 'Tanaka', langs: ['PHP', 'JavaScript', 'Java']},
    {name: 'Suzuki', langs: ['Java', 'PHP', 'C']},
    {name: 'Sato', langs: ['Python']},
    {name: 'Endo', langs: ['Java', 'C#', 'C']},
    {name: 'Yamada', langs: ['Python', 'Ruby', 'JavaScript']},
];

const langCount = new Map();

for (const engineer of engineers) {
    const langs = engineer['langs'];
    for (const lang of langs) {
        if (langCount.has(lang)) {
            langCount.set(lang, langCount.get(lang) + 1);
        } else {
            langCount.set(lang, 1);
        }
    }
}

for (const [lang, count] of langCount) {
    console.log(`${lang}: ${count}`);
}