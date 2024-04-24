const members = [
    {name: 'Yamada', age: 38, pref: 'Fukuoka'},
    {name: 'tanaka', age: 55, pref: 'Osaka'},
    {name: 'Suzuki', age: 22, pref: 'Tokyo'},
    {name: 'Yamamoto', age: 33, pref: 'Fukuoka'},
    {name: 'Kato', age: 38, pref: 'Tokyo'},
    {name: 'Endo', age: 41, pref: 'Osaka'},
    {name: 'Suzuki', age: 25, pref: 'Fukuoka'},
    {name: 'Yoshida', age: 30, pref: 'Fukuoka'},
    {name: 'Sato', age: 48, pref: 'Tokyo'},
];

function pref_age_summary(members) {
    const result = new Map();
    for (const m of members) {
        const pref = m.pref;
        if (!result.has(pref)) {
            result.set(pref, new Map());
        }
        const gen_map = result.get(pref);
        const gen = Math.floor(m.age / 10) * 10;
        if (!gen_map.has(gen)) {
            gen_map.set(gen, 0);
        }
        gen_map.set(gen, gen_map.get(gen) + 1);
    }
    return result;
}

console.log(pref_age_summary(members));