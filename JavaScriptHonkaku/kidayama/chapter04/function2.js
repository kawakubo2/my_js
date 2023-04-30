functions = [ 
    {'param': 'base,height', 'expr': 'return base * height / 2;' },
    {'param': 'radius', 'expr': 'return Math.pow(radius, 2) * Math.PI;'},
    {'param': 'upperbase,lowerbase,height', 'expr': 'return (upperbase + lowerbase) * height / 2;'}
];

funcs = []
for (const f of functions) {
    funcs.push(new Function(f['param'], f['expr']));
}

console.log(`三角形の面積: ${funcs[0](10, 15)}`);
console.log(`円の面積: ${funcs[1](5)}`);
console.log(`台形の面積: ${funcs[2](4, 6, 5)}`);
