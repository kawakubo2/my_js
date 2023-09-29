let scope = 'Gloabl Scope';

function getValue() {
    let scope = 'Local Scope';
    return scope;
}

console.log(getValue());
console.log(scope);

{
    let name = 'Yamada';
    console.log(name);
}

{
    let name = '洗濯機5kg(白)';
    console.log(name);
}

for (let i = 0; i < 5; i++) {
    console.log(`i = ${i}`);
}
for (let i = 5; i < 10; i++) {
    console.log(`i = ${i}`);
}

// i, j, kのようにループを回すだけの変数は
// Fortranの時代からi, j, k, l, m, n
// i, j ...のことをループ変数
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        for (let k = 0; k < 4; k++) {
            console.log(`${i} * ${j} * ${k} = ${i * j * k}`);
        }
    }
}