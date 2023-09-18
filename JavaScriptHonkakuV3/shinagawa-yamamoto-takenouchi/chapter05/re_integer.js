const ok = ["1", "+2", "-3", "45", "-82", "+18", "139753", "+8294", "-681731"]
const ng = ["a", "1.2", "123#", "++1", "2--", "1,2,3", "aba1234"];

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

test("^(\\+|-)?\\d+$", ok, true);
test("^(\\+|-)?\\d+$", ng, false);
