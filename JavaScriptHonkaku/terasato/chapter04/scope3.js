let scope = 'Global Variable';

function getValue() {
    let scope = 'Local Variable';
    console.log(scope);
    return scope;
}

console.log(getValue());
console.log(scope);