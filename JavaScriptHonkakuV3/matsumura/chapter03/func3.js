function cm2inch(cm) {
    return cm / 2.54;
}

const c = 100;
const inch = cm2inch(c);
console.log(c + "センチメートルは" + inch.toFixed(1) + "インチです。");