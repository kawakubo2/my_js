let func_data = [
    { param: 'base,height', formula: 'return base * height /2;', data: '8,5'},
    { param: 'radius', formula: 'return radius ** 2 * Math.PI;', data: '5'},
    { param: 'upperbase,lowerbase,height', formula: 'return (upperbase + lowerbase) * height / 2;'
            , data: '12,8,10'}
]

function getData(data) {
    let result = [];
    let ary = data.split(',')
    for (let n of ary) {
        result.push(Number.parseFloat(n));
    }
    return result;
}

for (let func_item of func_data) {
    let func = new Function(func_item['param'], func_item['formula']);
    let data = getData(func_item['data']);
    console.log(func(...data));
}