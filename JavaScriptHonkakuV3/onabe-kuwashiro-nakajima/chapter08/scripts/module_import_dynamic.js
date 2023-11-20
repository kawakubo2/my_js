import('../lib/util.js').then(abc => {
    console.log('--- module名をabcに変更 ---');
    console.log(abc.getTriangleArea(10, 2));
    const m = new abc.Member('佐藤理央', 25);
    m.show();
});