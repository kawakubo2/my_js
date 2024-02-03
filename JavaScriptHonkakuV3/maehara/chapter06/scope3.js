"use strict";

scope = 'Global Scope';
function getValue() {
    scope = 'Block Scope';
    return scope;
}
console.log(getValue()); // 結果：Block Scope ❸
console.log(scope); // 結果：Block Scope ❹