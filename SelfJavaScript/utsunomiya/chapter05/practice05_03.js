let animals = ['ウサギ', 'ウマ', 'ゾウ', 'ライオン'];

for (let animal of animals) {
    console.log(`--- ${animal} ---`)
    switch (animal) {
        case 'ゾウ':
            console.log('ゾウ');
        case 'ウマ':
            console.log('ウマ');
        case 'ウサギ':
            console.log('ウサギ');
            break;
        default:
            console.log('何かわかりません。');
            break;
    }
}