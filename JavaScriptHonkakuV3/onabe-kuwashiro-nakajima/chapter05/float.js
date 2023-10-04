console.log("===< 符号小数点の正規表現テスト >===");
const re = /^(\+|-)?\d+(\.\d+)?$/;

const ok_pattern = ["1", "+2", "-3", "12", "+23", "-34", "123456", "+34567", "-90123456",
                    "1.2", "+2.3", "-3.4", "12.3", "+23.4", "-34.5", "1.23", "+2.34", "-3.45",
                    "12.345", "+345.67", "-567.8901"];
const ng_pattern = ["a", "123b", "x24", "++3", "--4", "12a34", "1x2", "1x234", "123y4",
                    "1.23a", "a3.45", "1-3", "1.2.3", "12.3.4", "1.23.4", "1.2.34", "12.3.4",
                    "12.3.45", "12.34.5", "1.2.3.", ".1.2.3", ".1.2.3.", "1+", "34+", "56-", 
                    ".1.2", "2.3.", ".2.3.", "++1.23", "1.23+45", "--3.45"];

test(re, ok_pattern, true);
test(re, ng_pattern, false);

function test(regexp, targets, ok = true) {
    console.log(ok ? "---< 正常系テスト >---" : "---< 異常系テスト >---");
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