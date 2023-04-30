function checkNumberInArray(nums) {
    for (let n of nums) {
        if (typeof n !== 'number') {
            throw new Error('数値ではない要素が配列に含まれている');
            break;
        }
    }
}

function myPow(num, p) {
    console.log(num, p);
    if (p !== Math.floor(p)) {
        throw new Error('累乗て指定する値は整数値が必要');
    }
    let result = 1;
    for (let i = 0; i < p; i++) {
        result *= num;
    }
    return result;
}

function getCircleArea(radius) {
    console.log(radius);
    if (radius <= 0) {
        throw new Error('半径が0以下');
    }
    let result;
    try {
        result = myPow(radius, 2) * Math.PI;
    } catch (e) {
        throw e;
    }
}

function sendDataForServer() {
    console.log('サーバに送信しました。');
}

// let numbers = [1.1, 2.2, 3.3, 4.3, 5.5, 6.6, 7.7, 8.8];
let numbers = [1, 2, 3, 4, 5];
try {
    checkNumberInArray(numbers);
    for (let num of numbers) {
        console.log('for文内のnum:' + num)
        console.log(getCircleArea(num));
    }
    sendDataForServer();
} catch (e) {
    console.log(`エラーメッセージ: ${e.message}`);
}