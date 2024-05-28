const data = {
    apple: 150,
    orange: 100,
    banana: 120
};

// inの右側は連想配列
for (const key in data) {
    console.log(`${key} = ${data[key]}`);
}