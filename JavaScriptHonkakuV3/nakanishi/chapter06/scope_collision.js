let scope = 'Global Scope';

function getValue() {
    let scope = 'Block Scope';
    return scope;
}

console.log(getValue());
// グローバルスコープからブロックスコープの変数はアクセスできない
console.log(scope);