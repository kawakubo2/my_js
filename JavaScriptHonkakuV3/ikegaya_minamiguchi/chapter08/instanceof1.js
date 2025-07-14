const numbers = [1, 2, 3, 4, 5];

if (typeof numbers === 'object' && numbers instanceof Array) {
    console.log('配列です。');
} else {
    console.log('配列ではありません。');
}
if (Array.isArray(numbers)) {
    console.log('配列です。');
} else {
    console.log('配列ではありません。');
}

let date1 = new Date();
if (typeof date1 === 'object' && date1 instanceof Date) {
    console.log('Dateオブジェクトである。');
} else {
    console.log('Dateオブジェクトではありません。');
}
date1 = "2025-07-14";
if (typeof date1 === 'object' && date1 instanceof Date) {
    console.log('Dateオブジェクトである。');
} else {
    console.log('Dateオブジェクトではありません。');
}

