const ok = ["1", "+2", "-2", "3", "-4", "-5", 
            "12345", "+77799", "-9876", "1.1", "+2.3", "-4.5",
            "12.1", "+34.9", "-23.4", "1.23", 
            "+5.55", "-4.31", "1223.388", "+12.4677", "-1737.1287"
];
const ng = ["1a", "b2", "1+", "2-", "++1", "--2", "+2+", "+2-", "-3+",
            "1.", ".2", "2.3.", "2..3", "2.3.4", "2.3-", "3.4+", "123-456",
            "12.34.56", "45.ab", "1.cd", "xy.2", "a.3", "123.45."
];

function test(pattern, targets, ok) {
    console.log(`---------${ok ? "OK" : "NG"}パターン ---------`)
    const regexp = new RegExp(pattern);
    let count = 0;
    for (const target of targets) {
        let judge = false;
        if (regexp.test(target)) {
            count++;
            judge = true;
        }
        console.log(`${target}: ${judge ? '〇': '×'}`);
    }
    console.log("-----------------------------")
    if (ok) {
        console.log(count === targets.length ? "合格": "不合格");
    } else {
        console.log(count === 0 ? "合格": "不合格");
    }
}

const pattern = "^(\\+|-)?\\d+(\\.\\d+)?$";
test(pattern, ok, true);
test(pattern, ng, false);