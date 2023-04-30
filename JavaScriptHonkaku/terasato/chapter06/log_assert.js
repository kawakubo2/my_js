function circle(radius) {
    console.assert(typeof radius === 'number' && radius > 0,
        '引数radiusは正数でなければいけまんせん。');
    return Math.pow(radius, 2) * Math.PI;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', () => {
        const radius = Number.parseFloat(document.getElementById('radius').value);
        console.log(`radius: ${radius}`);
        document.getElementById('result').textContent = circle(radius);
    });
});