let scope = 'Global Scope';

function getValue() {
  // console.log(scope); // undefined
  // var scope = 'Block Scope';
  console.log(scope); // Reference Error: Cannot access 'scope' before initialization
  let scope = 'Block Scope';
  return scope;
}

console.log(getValue()); // Block Scope
console.log(scope); // Global Scope