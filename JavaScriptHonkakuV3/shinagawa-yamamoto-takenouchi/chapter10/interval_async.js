function hoge() {
    console.log('あいうえお');
    setTimeout(() => console.log('かきくけこ'), 0); // setInterval, setTimeoutは非同期関数
    console.log('さしすせそ');
}
hoge();