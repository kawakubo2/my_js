function getTriangle(args) {
    if (args.base === undefined) { args.base = 1; }
    if (args.height === undefined) { args.height = 1; }
    return args.base * args.height / 2;
}

console.log('---< base省略, height省略 >---');
console.log(getTriangle({}));
console.log('---< base省略 >---');
console.log(getTriangle({height: 3}));   
console.log('---< height省略 >---');
console.log(getTriangle({base: 5}));
console.log('---< 省略なし >---');
console.log(getTriangle({base: 5, height: 3}));
console.log('---< 省略なし(並び順を変える) >---');
console.log(getTriangle({height: 3, base: 5}));