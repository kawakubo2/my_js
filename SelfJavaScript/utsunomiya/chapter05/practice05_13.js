const breakTestArray = ['ぬけない', 'not break', 'break', 'この前で抜ける'];

for (let elem of breakTestArray) {
    console.log(elem);
    if (elem === 'break') break;
}