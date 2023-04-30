const numbers = [
    [ 88, 92, 70 ],
    [ 70, 88, 79 ],
    [ 58, 78, 98 ],
    [ 90, 80, 94 ]
];

for (const nums of numbers) {
    let total = 0;
    for (const num of nums) {
        total += num;
    }
    console.log(total);
}