// const { Type } = require("@sinclair/typebox");

import { isEmpty, isPositiveNumber} from '../validator.js';

/*
台形(trapezoid)の面積を求める
上底(upperBase)、下底(lowerBase)、高さ(height)から面積を求める
*/
function calcTrapezoidArea(upperBase, lowerBase, height) {
    if (isEmpty(upperBase) || !isPositiveNumber(upperBase)) throw new TypeError("上底の形式に誤りがあります。"); 
    if (isEmpty(lowerBase) || !isPositiveNumber(lowerBase)) throw new TypeError("下底の形式に誤りがあります。"); 
    if (isEmpty(height) || !isPositiveNumber(height)) throw new TypeError("高さの形式に誤りがあります。"); 
    return (upperBase + lowerBase) * height / 2;
}

const upper = -12;
const lower = 8;
const height = 15;

try {
    const area = calcTrapezoidArea(upper, lower, height);
    console.log(`台形の面積: ${area}`);
} catch(e) {
    console.log(e.message);
}