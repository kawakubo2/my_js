function showArgs(value) {
    console.log('=== showArgsテスト ===');
    console.log(value);
    console.log('--- arguments ---');
    if (arguments) {
        let result = '';
        for (let arg of arguments) {
            result += arg + ', ';
        }
        console.log(result);
    }
    console.log('');
}

showArgs();
showArgs('山田');
showArgs('山田', '鈴木');