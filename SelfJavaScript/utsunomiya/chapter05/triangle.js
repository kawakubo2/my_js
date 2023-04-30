class NotPositiveError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NotPositiveError';
    }
}

function getTriangleArea(base, height) {
    if (typeof base === 'number' && base > 0) {
        throw new NotPositiveError('底辺が数値ではないか負の数値です。');
    }
    if (typeof height === 'number' && height > 0) {
        throw new NotPositiveError('高さが数値ではないか負の数値です。');
    }
    return base * height / 2;
}

try {
    console.log(getTriangleArea(123, '12.3abc'));
} catch (error) {
    console.log(`型: ${error.name}: メッセージ: ${error.message}`);
}