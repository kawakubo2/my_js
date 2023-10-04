const re = /^(\+|-)?\d+$/;

const ok_pattern = ["1", "+2", "-3", "12", "+23", "-34", "123456", "+34567", "-90123456"];
const ng_pattern = ["a", "123b", "x24", "12.34", "++3", "--4", "12a34", "1x2", "1x234", "123y4"];

test(re, ok_pattern, true);
test(re, ng_pattern, false);

function test(regexp, targets, ok = true) {
    console.log(ok ? "---< 正常系テスト >----" : "---< 異常系テスト >---");
    let count = 0;
    for (const target of targets) {
        let result;
        if (regexp.test(target)) {
            result = "○";
            count++;
        } else {
            result = "×";
        }
        console.log(`${target}: ${result}`);
    }
    console.log("---[ 判定 ]---");
    if (ok) {
        result = targets.length === count ? "合格": "不合格";
    } else {
        result = count === 0 ? "合格": "不合格";
    }
    console.log(`${result}: ${count} / ${targets.length}`);
}