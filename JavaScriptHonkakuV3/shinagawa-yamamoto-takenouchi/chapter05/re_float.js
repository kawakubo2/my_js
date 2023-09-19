const ok = ["1", "+2", "-3", "45", "-82", "+18", "139753", "+8294", "-681731",
            "1.2", "+2.3", "-3.4", "0.1", "+0.3", "-0.4", "12.3", "+23.4",
            "-34.5", "1.23", "+2.34", "-3.45", "12.34", "+23.45", "-34.56",
            "3.", "-2.", "+4.", "12.", "+23.", "-34."];
const ng = ["a", "123#", "12+", "34-", "++1", "2--", "1,2,3", "aba1234",
            "12.34.56", "34.56A", "++3.4", "9.8--", "5.6+", "7.3-"];
/*
(1)先頭に+または-の符号が付いても付かないくても良い
(2)(1)の後に任意の個数(1個以上)の数字文字が続く
*/
function test(pattern, targets, ok) {
    if (ok) console.log('---< 正常系テスト >---');
    else console.log('---< 異常系テスト >---');
    const re = new RegExp(pattern);
    let count = 0;
    for (const t of targets) {
        if (re.test(t)) {
            count++
            console.log(`${t}: ○`);
        } else {
            console.log(`${t}: ×`);
        }
    }
    let result = null;
    if (ok) {
        result = targets.length === count ? '合格': '不合格';
    } else {
        result = count === 0 ? '合格': '不合格';
    }
    console.log(`${result}: ${count}/${targets.length}`);
}

const re = /^(\+|-)?\d+(\.\d+)?$/;
test(re, ok, true);
test(re, ng, false);
