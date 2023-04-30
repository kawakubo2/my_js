let scores = {
    '国語': [32, 48, 72, 68, 53],
    '数学': [88, 78, 39, 100, 58],
    '英語': [43, 98, 40, 89, 81]
};

function total(nums) {
    let result = 0;
    for (let num of nums) {
        result += num;
    }
    return result;
}

for (let kamoku in scores) {
    console.log(`${kamoku}: ${total(scores[kamoku])}`);
}