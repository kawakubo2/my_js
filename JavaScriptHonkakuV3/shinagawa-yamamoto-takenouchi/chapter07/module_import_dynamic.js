if (Math.random() >= 0.8) {
    console.log('動的インポートあり');
    import('./lib/util.js').then(util => {
        console.log(util.getTriangleArea(10, 2));
        const m = new util.Member('花子', '横山');
        console.log(m.getName());
    })
} else {
    console.log('動的インポートなし');
}