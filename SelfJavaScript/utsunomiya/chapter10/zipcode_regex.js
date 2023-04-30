const ok = [
    "123-4567", "234-5678"
];
const ng = [
    "123-456", "12-3456", "1234-5678", "123-45678", "1a3-4567",
    "123-4b67", "1.3-45.6"
];

function test(pattern, targets, ok = true) {
    let matchCount = 0;
    for (const target of targets) {
        console.log(target);
        if (pattern.test(target)) {
            matchCount++;
        }
    }
    console.log(`${matchCount} / ${targets.length}`);
    if (ok) {
        console.log(targets.length === matchCount ? "【合格】": "【不合格】"); 
    } else {
        console.log(matchCount === 0 ? "【合格】": "【不合格】"); 
    }
}

const zip_pattern = /^\d{3}-\d{4}$/;
console.log("---正常パターンテスト---")
test(zip_pattern, ok);
console.log("---異常パターンテスト");
test(zip_pattern, ng, false);