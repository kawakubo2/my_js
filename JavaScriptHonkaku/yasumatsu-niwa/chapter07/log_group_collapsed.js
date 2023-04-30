console.log('groupCollapsedを使った例');
console.groupCollapsed('上位グループ');
for (let i = 0; i < 3; i++) {
    console.groupCollapsed('下位グループ' + i);
    for (let j = 0; j < 3; j++) {
        console.log(i, j);
    }
    console.groupEnd();
}
console.groupEnd();