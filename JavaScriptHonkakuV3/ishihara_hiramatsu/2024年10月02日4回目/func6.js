import { isEmpty, isPositiveNumber} from '../validator.js';

/*
半径を元に円の面積を求める
円周率: Math.PI
*/
function getCircleArea(radius) {
    if (isEmpty(radius) || !isPositiveNumber(radius)) {
        throw new TypeError('半径の形式に誤りがあります。');
    }
    return radius ** 2 * Math.PI;
}

const hankei = 10;
try {
    console.log(`半径${hankei}の円の面積は${getCircleArea(hankei)}`);
} catch(e) {
    console.log(e.message);
}