let scope = 'Global Scope';

function getValue() {
    console.log(scope);
    let scope = 'Block scope';
    return scope;
}
console.log(getValue());
console.log(scope);
