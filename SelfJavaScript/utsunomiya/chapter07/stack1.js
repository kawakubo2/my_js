function first() {
    console.log('first開始');
    second();
    console.log('first終了');
}

function second() {
    console.log('second開始');
    third();
    console.log('second終了');
}

function third() {
    console.log('third開始');
    console.log('third終了');
}

first();