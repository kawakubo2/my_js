try {
    let i = 1;
    i = i * j;
    console.log(`${i} * ${j} ---> ${i * j}`);
} catch(e) {
    console.log(e.message);
} finally {
    console.log('処理は完了しました。');
}